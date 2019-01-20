import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Customer } from '../service/customer';
import { CustomerService } from '../service/customer.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers : Customer[];
  impcustomers : Customer[];
  comcustomers : Customer[];
  unknowncustomers : Customer[];
  selectedIndex = 0;
  private searchTerms = new Subject<string>();

  constructor(
    private customerService : CustomerService
  ) { }

  ngOnInit() {
    this.getCustomers(0);
    this.getCustomers(1);
    this.getCustomers(2);
    this.getCustomers(3);

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.customerService.searchCustomers(term,this.selectedIndex)),
    ).subscribe(customers => 
      {
        if(this.selectedIndex == 0){
          this.customers = customers
        }else if(this.selectedIndex == 1){
          this.impcustomers = customers;
        }else if(this.selectedIndex == 2){
          this.comcustomers = customers;
        }else if(this.selectedIndex == 3){
          this.unknowncustomers = customers;
        }
      }
    );
  }

  getCustomers(index): void{
    if(index == 0){
      this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    }else if(index == 1){
      this.customerService.getTypeCustomers(index).subscribe(customers => this.impcustomers = customers);
    }else if(index == 2){
      this.customerService.getTypeCustomers(index).subscribe(customers => this.comcustomers = customers);
    }else if(index == 3){
      this.customerService.getTypeCustomers(index).subscribe(customers => this.unknowncustomers = customers);
    }
  }

  search(term: string): void {
    if(term.trim()){
      this.searchTerms.next(term);
    }else{
      this.getCustomers(this.selectedIndex);
    }
  }

}
