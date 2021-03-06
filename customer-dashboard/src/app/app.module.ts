import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewCustomerComponent } from './components/add-new-customer/add-new-customer.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { JsonformatterPipe } from './pipes/jsonformatter.pipe';
import { AgePipe } from './pipes/age.pipe';
import { LoginComponent } from './components/login/login.component';

// a 'Route' is an object that contains 'path'->'Component' mapping
// a 'path' is nothing but a URI segment
// For example, http://localhost:4200/home --> '/home' is the path
// For example, http://localhost:4200/customers --> '/customers' is the path
// For example, http://localhost:4200/customers/ANTON --> '/customers/<id>' is the path
// For example, http://localhost:4200/add-customer --> '/add-customer' is the path

const routeConfig: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-all',
    component: CustomerListComponent
  },
  {
    path: 'add-new',
    component: AddNewCustomerComponent
  },
  {
    path: 'view-details/:customerId',
    component: CustomerDetailsComponent
  },
  {
    path: 'pipes-demo',
    component: PipesDemoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    // this is the default route handler; must be the last one.
    path: '**',
    component: PnfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    HomeComponent,
    AddNewCustomerComponent,
    PnfComponent,
    PipesDemoComponent,
    JsonformatterPipe,
    AgePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
