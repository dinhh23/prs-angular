import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.product);
    this.productsvc.create(this.product).subscribe (
      res => {
        console.debug("Product Created:", res);
        this.router.navigateByUrl("/products/list")
      },
      err => { console.error("Error creating product: ", err); }
    )
  }
  ngOnInit(): void {
  }

}
