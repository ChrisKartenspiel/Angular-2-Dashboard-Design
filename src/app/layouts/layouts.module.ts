import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LayoutsComponent} from './layouts.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingComponent } from './loading/loading.component';
import { ChartsComponent } from './charts/charts.component';

import {CommonMaterialModule} from '../shared/common-material.module';

import {routes} from './layouts.routes';
import { LoginComponent } from './login/login.component';

import {AreaChartComponent} from '../shared/charts/components/area/area-chart.component';
import { DatatableComponent } from './datatable/datatable.component';

import {CommonDatatableComponent} from '../shared/datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonMaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxChartsModule,
    NgxDatatableModule,
  ],
  declarations: [
    HomeComponent,
    LayoutsComponent,
    DashboardComponent,
    LoadingComponent,
    ChartsComponent,
    LoginComponent,
    AreaChartComponent,
    DatatableComponent,
    CommonDatatableComponent,
  ]
})
export class LayoutsModule { }
