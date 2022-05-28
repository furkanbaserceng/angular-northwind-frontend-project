import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any={productId:1,productName:"Laptop",categoryId:1,unitPrice:50,unitsInStock:100}
  product2:any={productId:2,productName:"Telefon",categoryId:1,unitPrice:150,unitsInStock:200}
  product3:any={productId:3,productName:"Cüzdan",categoryId:2,unitPrice:250,unitsInStock:300}
  product4:any={productId:4,productName:"Bardak",categoryId:3,unitPrice:350,unitsInStock:400}
  product5:any={productId:5,productName:"Masa",categoryId:4,unitPrice:450,unitsInStock:500}

  products=[this.product,this.product2,this.product3,this.product4,this.product5];

  
  constructor() { }

  ngOnInit(): void {
  }

}
