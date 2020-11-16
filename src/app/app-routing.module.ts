import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { VendorsComponent } from './vendor/vendors/vendors.component';
import { ProductsComponent } from './product/products/products.component';
import { RequestsComponent } from './request/requests/requests.component';

import { UserListComponent } from './user/user-list/user-list.component'


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "users/list", component: UserListComponent },
  { path: "vendors", component: VendorsComponent },
  { path: "products", component: ProductsComponent },
  { path: "requests", component: RequestsComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
