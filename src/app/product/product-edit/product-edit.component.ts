import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class'
import { VendorService } from 'src/app/vendor/vendor.service';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.product);
    this.productsvc.change(this.product).subscribe (
      res => {
        console.debug("Product Change:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error changing product: ", err);}
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res);
        this.product = res
      },
      err => { console.error(err); }
    );
    this.vendorsvc.list().subscribe(
      res => { console.debug(res); this.vendors = res as Vendor[];},
      res =>{ console.error(res)}
    )
    }    
  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }
}