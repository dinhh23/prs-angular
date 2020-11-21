import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../core/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { LineItem } from '../line-item.class';
import { LineItemService } from '../line-item.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

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
}