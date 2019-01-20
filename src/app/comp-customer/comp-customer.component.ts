import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import { Customer } from '../service/customer';

@Component({
  selector: 'app-comp-customer',
  templateUrl: './comp-customer.component.html',
  styleUrls: ['./comp-customer.component.css']
})
export class CompCustomerComponent implements OnInit {

  @Input() customers : Customer[];
  @Input() showtypecn : boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }

}
