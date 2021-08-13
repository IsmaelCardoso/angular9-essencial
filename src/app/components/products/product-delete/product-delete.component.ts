import { Router, Route, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { ProductModel } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: ProductModel = {
    id: 0,
    name: "",
    price: null,
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") || "0";
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage("Product remove successfully!!!");
      this.router.navigate(['/products']);
    }
    );
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
