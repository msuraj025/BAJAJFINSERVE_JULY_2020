import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'; // npm i rxjs-compat
import { AuthService } from './auth.service';

const baseUrl = 'http://localhost:3000/customers';


// injectables are singletons (Angular creates a single instance of this class)
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  pageNum: number = 1;

  constructor(private http: HttpClient, private authService: AuthService) { }

  addNewCustomer(customer: any): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.post(baseUrl, customer, options);
  }

  getAllCustomers(pageNum: number = 1): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http
      .get(baseUrl + '?page=' + pageNum, options);
  }

  getOneCustomer(custId: string): Observable<any> {
    custId = custId.toUpperCase();
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.get(baseUrl + '/' + custId, options);
  }
}
