import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  environmentinfo = environment;

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  
  constructor() { }

  ngOnInit() {
    // console.log("environment"+JSON.stringify(this.environmentinfo));
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
