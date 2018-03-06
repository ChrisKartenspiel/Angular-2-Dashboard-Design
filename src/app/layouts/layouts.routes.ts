import { Routes } from '@angular/router';

import {LayoutsComponent} from './layouts.component';
import {HomeComponent} from './home/home.component';
import {LoadingComponent} from './loading/loading.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartsComponent} from './charts/charts.component';
import {LoginComponent} from './login/login.component';
import {DatatableComponent} from './datatable/datatable.component';

export const routes: Routes = [
  {
    path: 'layouts',
    component: LayoutsComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'Home'} },
      { path: 'login', component: LoginComponent, data: { title: 'Login'} },
      { path: 'charts', component: ChartsComponent, data: { title: 'Charts'} },
      { path: 'loading', component: LoadingComponent, data: { title: 'Loading'} },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'}},
      { path: 'datatable', component: DatatableComponent, data: { title: 'Datatable'}}
    ]
  }
];
