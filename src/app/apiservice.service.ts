import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) {}
  getproduct(){
    return this.http.get("https://fakestoreapi.in/api/products")
  }
  getproductById(id:string){
    return this.http.get(`https://fakestoreapi.in/api/products/${id}`)
  }
}
