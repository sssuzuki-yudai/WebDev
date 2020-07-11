import { products } from '../products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// export { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        // return products
        return this.http.get('/api/v1/products')
    }

    getProductById(productId: string): Observable<any> {
        return this.http.get('/api/v1/products/' + productId)
    }

}