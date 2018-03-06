import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public routes: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.routes = [
      {name: 'Home', path: '/layouts/home'},
      {name: 'Login', path: '/layouts/login'},
      {name: 'Datatable', path: '/layouts/datatable'},
      {name: 'Charts', path: '/layouts/charts'},
      {name: 'Dashboard', path: '/layouts/dashboard'},
      {name: 'Loading', path: '/layouts/loading'},
    ];
  }

}
