import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user.class';
import { SystemService } from '../../core/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = null;
  
  constructor(
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.user = this.sysSvc.loggedInUser;
  }

}
