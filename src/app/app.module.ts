import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item/menu-item.component';
import { UsersComponent } from './user/users/users.component';
import { VendorsComponent } from './vendor/vendors/vendors.component';
import { ProductsComponent } from './product/products/products.component';
import { RequestsComponent } from './request/requests/requests.component';
import { LineitemsComponent } from './lineitem/lineitems/lineitems.component';
import { UserListComponent } from './user/user-list/user-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    MenuItemComponent,
    UsersComponent,
    VendorsComponent,
    ProductsComponent,
    RequestsComponent,
    LineitemsComponent,
    UserListComponent,
  
    
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
