import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../line-item.class';
import { LineItemService } from '../line-item.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { SystemService } from '../../core/system.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  
  products: Product[] =[];
  request: Request = new Request();
  lineitem: LineItem = new LineItem();
  requestId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private requestsvc: RequestService,
    private lineitemsvc: LineItemService,
    private systemsvc: SystemService,
  ) { }

    save(): void {
      this.lineitem.request = this.request; 
      console.log(this.lineitem);
      this.lineitemsvc.create(this.lineitem).subscribe (
        res => {
          console.debug("LineItem Created:", res);
          this.router.navigateByUrl("/requests/lines/" + this.request.id);
        },
        err => { console.error("Error creating LineItem: ", err);}
      )
    }


    ngOnInit(): void {
      //get request for id pass in url
      this.requestId = +this.route.snapshot.params.id;
      this.requestsvc.get(this.requestId).subscribe(
        res => {
          console.debug("Request:", res);
          this.request = res
          this.lineitem.request = this.request
        },
        err => { console.error(err); }
      );
      
      this.productsvc.list().subscribe(
        res => { console.debug(res); this.products = res as Product[];},
        res =>{ console.error(res)}
      )

    }
  
  }
  