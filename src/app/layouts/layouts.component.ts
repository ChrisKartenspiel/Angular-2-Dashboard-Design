import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {TitleItemService, MenuTitle} from '../shared/title-item.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html'
})

export class LayoutsComponent implements OnInit {

  public activeItem: string;

  constructor(private titleItemService: TitleItemService) {
    this.titleItemService.activeTitle$.subscribe((res) => {
      this.activeItem = res.title;
    });
  }

  ngOnInit() {
  }

}
