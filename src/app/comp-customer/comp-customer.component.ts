import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../service/customer';

@Component({
  selector: 'app-comp-customer',
  templateUrl: './comp-customer.component.html',
  styleUrls: ['./comp-customer.component.css']
})
export class CompCustomerComponent implements OnInit {

  @Input() customers : Customer[];
  @Input() showtypecn : boolean;

  constructor() {}

  ngOnInit() {
  }

}
