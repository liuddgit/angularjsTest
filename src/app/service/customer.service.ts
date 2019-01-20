import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from './customer';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = "api/customers";
  constructor(private http: HttpClient) { }

  getCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl, httpOptions);
  }

  getTypeCustomers(type: number):Observable<Customer[]> {
    if(!type){
      return of([]);
    }
    const url = `${this.customerUrl}/?type=${type}`
    return this.http.get<Customer[]>(url, httpOptions);
  }

  getCustomer(id : number): Observable<Customer>{
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url, httpOptions);
  }

  searchCustomers(term : string, type: number) : Observable<Customer[]> {
    if(!term.trim()){
      return of([]);
    }
    
    let url = `${this.customerUrl}/?name=${term}`;
    if(type != 0){
      url += `&type=${type}`
    }
    return this.http.get<Customer[]>(url, httpOptions);
  }
}
