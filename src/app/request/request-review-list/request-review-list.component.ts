import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../../user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  user: User = new User();
  requests: Request[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();
    console.debug("Reviewer", this.systemsvc.loggedInUser)
    this.requestsvc.requests(this.systemsvc.loggedInUser.id).subscribe(
      res => {
        console.debug("Request in review:", res);
        this.requests = res as Request[];
        
      },
      err => { console.error(err);}
      
    
    )
  }

}
