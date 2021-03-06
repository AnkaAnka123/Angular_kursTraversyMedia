import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtanded: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Big st',
            city: 'Miami',
            state: 'FL'
          }
        }
       ];

       this.loaded = true;
    }, 2000);
     this.showExtanded = false;
    //  this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    //   age: 44,
    //   address: {
    //     street: '20 Wake st',
    //     city: 'Miami',
    //     state: 'FL'
    //   }
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
