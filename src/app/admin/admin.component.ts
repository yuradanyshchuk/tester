import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/services/users.service';
import {Router} from '@angular/router';

interface User {
  roles: [string];
  id: number;
  username: string;
  response: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.checkLogin()
      .subscribe((data: User) => {
        const response = data.response;
        console.log(data.response);

        if (response === 'non logged') {
          this.router.navigate(['/login']);
        } else if (data.roles[1] === 'student') {
          this.router.navigate(['/student']);
        }
      }, undefined, null);
  }

  logOut() {
    this.usersService.outLogin()
      .subscribe((data: User) => {
        const response = data.response;
        console.log(data.response);
      });
    this.router.navigate(['/login']);
  }

}
