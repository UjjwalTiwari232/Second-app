import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  listOfProducts:any[] = [];
  
  constructor( private productService:ProductService ) {
    
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data:any[])=>{
      this.listOfProducts = data;
    });
    
  }

  

}
