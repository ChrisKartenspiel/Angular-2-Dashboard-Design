import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

export class MenuTitle {
  path: string;
  title: string;
  icon?: string;
}

@Injectable()
export class TitleItemService {

  activeTitle$: Observable<any>;

  constructor(private router: Router,
              private routeActive: ActivatedRoute,
              private titleService: Title) {
    this.activeTitle$ = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(_ => {
        return this.router.routerState.root;
      })
      .map(route => {
        const active = this.lastRouteWithMenuItem(route.root);
        let title;
        if (!active) title = 'Layout App';
        title = active.title + ' - Layouts App';
        this.titleService.setTitle(title);
        return active;
      });

  }

  private lastRouteWithMenuItem(route: ActivatedRoute): MenuTitle {
    let lastMenu = undefined;
    do { lastMenu = this.extractMenu(route) || lastMenu; }
    while ((route = route.firstChild));
    return lastMenu;
  }

  private extractMenu (route: ActivatedRoute): MenuTitle {
    let cfg = route.routeConfig;
    return cfg && cfg.data && cfg.data.title ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon} : undefined;
  }
}
