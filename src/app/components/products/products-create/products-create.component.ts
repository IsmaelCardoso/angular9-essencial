import { ProductModel } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  product: ProductModel = {
    name: "",
    price: 0,
  }

  constructor(private productServece: ProductService, private router: Router) {

  }

  ngOnInit(): void { }

  createProduct(): void {
    const result = this.productServece.create(this.product).subscribe(() => {
      this.productServece.showMessage("Product created!!");
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }


}
