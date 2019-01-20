import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../service/order';

@Component({
  selector: 'app-comp-order',
  templateUrl: './comp-order.component.html',
  styleUrls: ['./comp-order.component.css']
})
export class CompOrderComponent implements OnInit {

  @Input() orders : Order[];

  constructor() {
  }

  ngOnInit() {
  }

}
