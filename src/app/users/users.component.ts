import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  currentUser;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
  }

  getUser(id) {
    this.usersService.getUser(id).subscribe(user => {
      this.currentUser = user;
    });
  }
}
