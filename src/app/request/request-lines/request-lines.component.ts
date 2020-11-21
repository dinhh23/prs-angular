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


refresh(): void {
 let id =this.route.snapshot.params.id;
  this.requestsvc.get(id).subscribe(
   res => {console.debug("Refresh works:", res);
   this.request = res;
  },
  err => {console.error("Refresh doesn't work:", err);}
 );
 }

delete(lineitem: LineItem): void {
  this.lineitemssvc.remove(lineitem).subscribe(
    res => {console.debug("Lineitem removed:", res);
    this.refresh();
  },
    err => {console.error("Error deleting lineitem", err);}
  );
 }
}