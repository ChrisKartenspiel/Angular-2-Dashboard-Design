import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { SDKBrowserModule} from './shared/sdk/index';

import { CommonMaterialModule} from './shared/common-material.module';
import { AppComponent } from './app.component';
import {routes} from './app.routes';

import { TitleItemService } from './shared/title-item.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    NoopAnimationsModule,
    CommonMaterialModule,
    FlexLayoutModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [TitleItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
