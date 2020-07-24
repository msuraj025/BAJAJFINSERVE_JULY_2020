import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000/customers/';


// injectables are singletons (Angular creates a single instance of this class)
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Array<any>> {
    return this.http
      .get(baseUrl)
      .map(resp => resp as Array<any>);
  }

  getOneCustomer(custId: string): Observable<any> {
    custId = custId.toUpperCase();
    return this.http.get(baseUrl + custId);
  }
}