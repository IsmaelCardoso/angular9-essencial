import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:4000/products";

  constructor(private snakBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snakBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: ProductModel): Observable<ProductModel> {

    return this.http.post<ProductModel>(this.baseUrl, product);
  }

  read(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl)
  }
}
