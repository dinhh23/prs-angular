import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../core/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { LineItem } from '../line-item.class';
import { LineItemService } from '../line-item.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: Request;
  lineitems: LineItem[] = [];

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private lineitemssvc: LineItemService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => { console.error(err);}
    );
    this.lineitemssvc.linesForReq(id).subscribe(
      res => {
        console.debug("Request Lineitems:", res);
        this.lineitems = res;
      },
      err => { console.error(err);}
    );
  }

  submitForReview(): void {
    this.requestsvc.review(this.request).subscribe(
      res => {
        console.debug("Request Submmitted:", res);
        this.router.navigateByUrl("/requests/list")
      },
      err => { console.error("Request not submmitted:", err);}
    )
 }

// refresh the request detail on the page without routing to a different page
refreshR(): void {
 let id =this.route.snapshot.params.id;
  this.requestsvc.get(id).subscribe(
   res => {console.debug("Refresh request works:", res);
   this.request = res;
  },
  err => {console.error("Refresh request doesn't work:", err);}
 );
 }

 // refresh the line items detail on the page without routing to a different page
refreshLI(): void {
 let id =this.route.snapshot.params.id;
  this.lineitemssvc.linesForReq(id).subscribe(
   res => {console.debug("Refresh line items works:", res);
   this.lineitems = res;
  },
  err => {console.error("Refresh line items doesn't work:", err);}
 );
 }

delete(lineitem: LineItem): void {
  this.lineitemssvc.remove(lineitem).subscribe(
    res => {console.debug("Lineitem removed:", res);
    this.refreshR();
    this.refreshLI(); 
  },
    err => {console.error("Error deleting lineitem", err);}
  );
 }
}