import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  delete(): void {
    console.log(this.product);
    this.productsvc.remove(this.product).subscribe (
      res => {
        console.debug("Product Remove:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error deleting product: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res);
        this.product = res;
      },
      err => { console.error(err); }
    );
  }

}
