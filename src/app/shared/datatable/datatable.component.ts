import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class CommonDatatableComponent implements OnInit {

  @Input('rows') rows;
  @Input('columns') columns;

  constructor() { }

  ngOnInit() {
    if(!this.rows || !this.columns){
      console.log("SHAY");
    }
    console.log(this.rows);
    console.log(this.columns);
  }

}
