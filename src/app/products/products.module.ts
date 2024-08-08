import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';




@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    
    
  ]
})
export class ProductsModule { }
