import { Component, OnInit } from '@angular/core';
import { AreaChartConfig} from '../../shared/charts/chart-config';

import { Client} from '../../shared/sdk/models/Client';
import {ClientApi} from '../../shared/sdk/services/custom/Client';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  private user: Client;
  private users: any[];
  private range: string;
  private userSelected: string;

  private areaChartConfig: Array<AreaChartConfig>;


  constructor(private clientApi: ClientApi) {
    this.range = 'monthly';
    this.user = new Client();

  }

  ngOnInit() {
    this.initList();
    this.user.id = this.clientApi.getCurrentId();
    this.userSelected = this.user.id;
  }


  getStats() {
    this.clientApi.clientStatsWrapper(this.userSelected, this.range)
      .subscribe((stats: any[]) => {
        const response: any = stats;

        // Create a new AreaChartConfig Object to set Income by customer Config
        let clientIncomeArea: AreaChartConfig = {
          settings: {
            fill: 'rgba(1, 67, 163, 0.5)',
            interpolation: 'monotone'
          },
          dataset: response.clientIncomeStats.map(data => {
            return { x: new Date(data.date), y: data.count};
          })
        };

        let clientOrderArea = {
          settings: {
            fill: 'rgba(1, 67, 163, 0.5)',
            interpolation: 'monotone'
          },
          dataset: response.clientOrderStats.map(data => {
            return { x: new Date(data.date), y: data.count};
          })
        };


        // Append our AreaChartConfigs into an array of Configs
        this.areaChartConfig = new Array<AreaChartConfig>();
        this.areaChartConfig.push(clientIncomeArea);
        this.areaChartConfig.push(clientOrderArea);
      })
  }

  initList () {
    this.clientApi.find({ 'skip': 2, 'limit': 20, 'fields': ['id', 'username', 'name']})
      .subscribe(users => this.users = users);
  }
}
