import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  category:any={categoryId:1,categoryName:"Bilgisayar"};
  category2:any={categoryId:2,categoryName:"Cep Telefonu"};
  category3:any={categoryId:3,categoryName:"Ev Ürünleri"};
  category4:any={categoryId:4,categoryName:"Yiyecek"};
  category5:any={categoryId:5,categoryName:"İçecek"};

  categories=[this.category,this.category2,this.category3,this.category4,this.category5];


  constructor() { }

  ngOnInit(): void {
  }

}
