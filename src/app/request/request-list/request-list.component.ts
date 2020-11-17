import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  
  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => { console.error(err);}
    );
    }  

}
