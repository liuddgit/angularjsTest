import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-tab',
  templateUrl: './comp-tab.component.html',
  styleUrls: ['./comp-tab.component.css']
})
export class CompTabComponent implements OnInit {

  @Input() activeindex: number;

  constructor() {}

  ngOnInit() {
    
  }

}
