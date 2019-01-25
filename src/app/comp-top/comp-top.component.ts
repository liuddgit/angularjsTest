import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-top',
  templateUrl: './comp-top.component.html',
  styleUrls: ['./comp-top.component.css']
})
export class CompTopComponent implements OnInit {

  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
