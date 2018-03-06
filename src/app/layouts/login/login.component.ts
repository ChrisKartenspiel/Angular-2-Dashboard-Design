import { Component, OnInit } from '@angular/core';

import {Client} from '../../shared/sdk/models/Client';
import {ClientApi} from '../../shared/sdk/services/custom/Client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: Client;

  constructor(private userApi: ClientApi) {
    this.user = new Client();
  }

  ngOnInit() {
  }
  private login () {
    console.log(this.user);
    this.userApi.login(this.user)
      .subscribe((res)=> {
        console.log(res)
      },(err)=>{
        console.log(err);
      });
  }

}
