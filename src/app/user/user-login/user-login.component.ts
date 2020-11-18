import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  message: string = "";
  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.user);
    this.usersvc.login(this.user.userName, this.user.passWord).subscribe(
      res => {
        this.systemsvc.loggedInUser = res;
        console.debug("User Logged In:", res);
        this.router.navigateByUrl("/home");
      },
      
      err => { 
        console.error(err);
        this.message ="Invalid Username/Password. Please Try Again!!!";
        this.systemsvc.loggedInUser = null; }
    );
  }
}


