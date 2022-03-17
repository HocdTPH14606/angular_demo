import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newProduct = {
    name: '',
    description: '',
    price: 0
  }
  products = [{
    id:1,
    name: 'Iphone',
    price: 10000000,
    description: 'Mô tả Iphone' },
  {
    id:2,
    name: 'samsung',
    price: 20000000,
    description: 'Mô tả samsung' },
  {
    id:3,
    name: 'xiaomi',
    price: 123,
    description: 'Mô tả xiaomi' }
];
  productsFilter = this.products;
 remove(productId: number){
  this.productsFilter = this.productsFilter.filter(function (product){
     return product.id !== productId
   })
  }
newproduct = {
    id: 0,
    name: '',
    price: 0,
    description: ''
  };
  onChange(event :any, key:string){
       this.newproduct = {
         ...this.newproduct,
         [key]: event.target.value
    }
  }
  onSubmit(){
    if (this.isEdit){
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i].id === this.newproduct.id){
          this.products[i] = this.newproduct;
        }
      }
      this.isEdit = false;
    }else {
    this.newproduct.id = this.products.length + 1;
    this.products.push(this.newproduct);
    }
    this.newproduct = {
      id: 0,
    name: '',
    price: 0,
    description: ''
    }
  }
  isEdit = false;
  onEdit(obj: any){
    this.newproduct = obj;
    this.isEdit = true;
  }
}
