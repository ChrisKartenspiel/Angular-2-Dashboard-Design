import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoopBackConfig } from './app/shared/sdk/lb.config';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

LoopBackConfig.setBaseURL(environment.databaseURL);
platformBrowserDynamic().bootstrapModule(AppModule);
