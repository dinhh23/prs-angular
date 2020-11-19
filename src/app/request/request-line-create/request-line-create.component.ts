import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../line-item.class';
import { LineItemService } from '../line-item.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  vendors: Vendor[];
  products: Product[] =[];
  request: Request = new Request();
  lineitem: LineItem = new LineItem();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private requestsvc: RequestService,
    private lineitemsvc: LineItemService,
  ) { }

    save(): void {
      console.log(this.lineitem);
      this.lineitemsvc.create(this.lineitem).subscribe (
        res => {
          console.debug("LineItem Created:", res);
          this.router.navigateByUrl("/requests/lines/{{request.id}}")
        },
        err => { console.error("Error creating LineItem: ", err);}
      )
    }


    ngOnInit(): void {
      this.productsvc.list().subscribe(
        res => { console.debug(res); this.products = res as Product[];},
        res =>{ console.error(res)}
      )

    }
  
  }