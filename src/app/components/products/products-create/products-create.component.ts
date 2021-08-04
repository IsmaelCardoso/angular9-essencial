import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private productServece: ProductService, private router: Router) {

  }

  ngOnInit(): void { }

  createProduct(): void {
    this.productServece.showMessage("Product created!!");
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
