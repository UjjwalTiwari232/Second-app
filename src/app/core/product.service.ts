import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService{
    apiUrl = "https://api.escuelajs.co/api/v1/products";

    constructor( private http:HttpClient ) { console.log("jegtg");
    }

    getProducts():Observable<any[]>{
        return this.http.get<any[]>(`${this.apiUrl}`);
    }
}

