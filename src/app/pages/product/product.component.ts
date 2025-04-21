

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../UI/card/card.component';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: any[] = [];

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit() {
    this.apiservice.getproduct().subscribe((data: any) => {
      if (data.status === 'SUCCESS' && Array.isArray(data.products)) {
        this.products = data.products;
      }
    });
  }
}
