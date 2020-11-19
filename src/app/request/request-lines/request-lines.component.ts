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

  requests: Request;
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
        this.requests = res;
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
