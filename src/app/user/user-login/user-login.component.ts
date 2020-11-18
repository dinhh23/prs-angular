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
  username: string = "";
  password: string = "";
  user: User = null;

  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    // default username/password so we dont have to login everytime while testing
    this.username = "hdinh";
    this.password = "dog";
    this.systemsvc.loggedInUser = null; // clear out logged in user
  }

  login(): void {
    console.log(this.user);
    this.usersvc.login(this.username, this.password).subscribe(
      res => {
        console.log("User Logged In:", res);
        this.user = res as User;  
        this.systemsvc.loggedInUser = this.user;             
        this.router.navigateByUrl("/home");
      },
      
      err => { 
        console.error(err);
        this.message ="Invalid Username/Password. Please Try Again!!!";
        }
    );
  }
}


