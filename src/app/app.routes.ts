import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/layouts/home', pathMatch: 'full' },
  { path: '', loadChildren: './layouts/layouts.module#LayoutsModule' },
];
