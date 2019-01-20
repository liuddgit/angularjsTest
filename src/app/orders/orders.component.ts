import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  narorders : Order[];
  curorders : Order[];
  yesorders : Order[];
  selectedIndex = 0;
  private searchTerms = new Subject<string>();

  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit() {
    this.getOrders(0);
    this.getOrders(1);
    this.getOrders(2);

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.orderService.searchOrders(term,this.selectedIndex+1)),
    ).subscribe(orders => 
      {
        if(this.selectedIndex == 0){
          this.curorders = orders;
        }else if(this.selectedIndex == 1){
          this.yesorders = orders;
        }else if(this.selectedIndex == 2){
          this.narorders = orders
        }
      }
    );
  }

  getOrders(index): void{
    if(index == 0){
      this.orderService.getTypeOrders(index+1).subscribe(orders => this.curorders = orders);
    }else if(index == 1){
      this.orderService.getTypeOrders(index+1).subscribe(orders => this.yesorders = orders);
    }else if(index == 2){
      this.orderService.getOrders().subscribe(orders => this.narorders = orders);
    }
  }

  search(term: string): void {
    if(term.trim()){
      this.searchTerms.next(term);
    }else{
      this.getOrders(this.selectedIndex);
    }
  }

}
