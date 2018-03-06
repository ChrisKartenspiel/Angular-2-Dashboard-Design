import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public statsList: Array<any>;

  constructor() { }

  ngOnInit() {
    this.statsList = [
      {
        type: 'reminder',
        owner: 'Me',
        date: '17.05.2017',
        hour: '15:00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet feugiat sem. '
      }, {
        type: 'appointment',
        owner: 'Me',
        date: '17.05.2017',
        hour: '15:00',
        description: 'Nam in augue at lectus malesuada mattis sit amet eget leo. Curabitur sit amet mauris condimentum.'
      },       {
        type: 'info',
        owner: 'Me',
        date: '17.05.2017',
        hour: '15:00',
        description: 'convallis nunc vel, molestie magna. Cras eu felis sed turpis accumsan interdum vitae nec dui. Sed ipsum lectus.'
      },
    ];
  }

}
