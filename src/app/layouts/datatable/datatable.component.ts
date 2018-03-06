import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  public rows: any[];
  public columns: any[];

  constructor() { }

  ngOnInit() {
    this.rows = [
      { name: 'Abderrazak', lastName: 'Hedider', email: 'abderrazakhedider@aspire.qa', status: 'Created', role: 'Coach' },
      { name: 'Abderrazak', lastName: 'Hedider', email: 'abderrazakhedider@aspire.qa', status: 'Created', role: 'Coach' },
      { name: 'Abderrazak', lastName: 'Hedider', email: 'abderrazakhedider@aspire.qa', status: 'Created', role: 'Coach' },
      { name: 'Abderrazak', lastName: 'Hedider', email: 'abderrazakhedider@aspire.qa', status: 'Created', role: 'Coach' }
    ];
    this.columns = [
      {name: 'Name', prop: 'name'},
      {name: 'Last Name', prop: 'lastName'},
      {name: 'Email', prop: 'email'},
      {name: 'Status', prop: 'status'},
      {name: 'Role', prop: 'role'}
    ];
  }

}
