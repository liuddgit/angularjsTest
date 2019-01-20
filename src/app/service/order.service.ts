import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from './order';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = "api/orders";
  constructor(private http: HttpClient) { }

  getOrders():Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl, httpOptions);
  }

  getTypeOrders(daynum: number):Observable<Order[]> {
    if(!daynum){
      return of([]);
    }
    const url = `${this.orderUrl}/?daynum=${daynum}`
    return this.http.get<Order[]>(url, httpOptions);
  }

  getOrder(id : number): Observable<Order>{
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<Order>(url, httpOptions);
  }

  searchOrders(term : string, daynum: number) : Observable<Order[]> {
    if(!term.trim()){
      return of([]);
    }
    let url = `${this.orderUrl}/?name=${term}`;
    if(daynum != 3){
      url += `&daynum=${daynum}`
    }
    return this.http.get<Order[]>(url, httpOptions);
  }
}
