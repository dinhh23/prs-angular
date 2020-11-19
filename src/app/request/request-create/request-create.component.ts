import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.class';
import { SystemService } from '../../core/system.service'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  loggedInUser: User = this.systemsvc.loggedInUser;
  

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  save(): void {
    console.log(this.request);
    this.requestsvc.create(this.request).subscribe (
      res => {
        console.debug("Request Created:", res);
        this.router.navigateByUrl("/requests/list")
      },
      err => { console.error("Error creating request: ", err); }
    )
  }
  ngOnInit(): void {
    this.systemsvc.checkLogin();
    this.request.user = this.systemsvc.loggedInUser;

    
  }

}

