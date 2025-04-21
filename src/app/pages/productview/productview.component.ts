// import { Component } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
// import { ApiserviceService } from '../../apiservice.service';

// @Component({
//   selector: 'app-productview',
//   imports: [],
//   templateUrl: './productview.component.html',
//   styleUrl: './productview.component.scss'
// })
// export class ProductviewComponent {
//   product:any;
//   constructor(private route:ActivatedRoute,private apiservice:ApiserviceService){}


//   ngOnInit(){

//     const productId=this.route.snapshot.paramMap.get('id');
//     if(productId) {
//       this.apiservice.getproductById(productId).subscribe((data)=>{
//         this.product=data;});
//     }
//   }
// }


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiserviceService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    const parsedId = productId ? +productId : null;

    if (parsedId !== null) {
      this.apiservice.getproduct().subscribe((data: any) => {
        if (data.status === 'SUCCESS' && Array.isArray(data.products)) {
          const foundProduct = data.products.find((p: any) => p.id === parsedId);
          this.product = foundProduct;
        }
      });
    }
  }
}

