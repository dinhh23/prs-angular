import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../line-item.class';
import { LineItemService } from '../line-item.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { SystemService } from '../../core/system.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  products: Product[] =[];
  lineitem: LineItem = new LineItem();
  requestId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private lineitemsvc: LineItemService,
    private productsvc: ProductService,
    
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();
    this.requestId = +this.route.snapshot.params.id;
      this.lineitemsvc.get(this.requestId).subscribe(
        res => {
          console.debug("LineItem to change:", res);
          this.lineitem = res;
        },
        err => { console.error(err); }
      );
      
      this.productsvc.list().subscribe(
        res => { console.debug(res); this.products = res as Product[];},
        res =>{ console.error(res)}
      )
  }

  save(): void {
    this.lineitemsvc.change(this.lineitem).subscribe(
      res => {
        console.debug("LineItem change: ", res);
      this.router.navigateByUrl("/requests/lines/" + this.lineitem.request.id);}
    ),
      err => { console.error("Error changing lineitem:", err);}
  }

}
  