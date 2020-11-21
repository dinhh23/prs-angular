import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item/menu-item/menu-item.class';
import { SystemService } from 'src/app/core/system.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: MenuItem[] = [
    new MenuItem("Home", "/home", "Home Page"),
    new MenuItem("User", "/users/list", "Users List"),
    new MenuItem("Vendor", "/vendors/list", "Vendors List"),
    new MenuItem("Product", "/products/list", "Products List"),
    new MenuItem("Request", "/requests/list", "Requests List"),
    new MenuItem("Review", "/requests/review", "Request Reviews List"),
    new MenuItem("Login", "/users/login", "Login Page"),
    new MenuItem("About", "/about", "About Page"),
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
