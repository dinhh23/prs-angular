import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
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
    this.vendorsvc.list().subscribe(
      res => { console.debug(res); this.vendors = res as Vendor[];},
      res =>{ console.error(res)}
    )
  }

}
