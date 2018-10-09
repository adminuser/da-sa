import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = new User(0,'','','',0,'');
  genders = ['Male','Female'];

}
