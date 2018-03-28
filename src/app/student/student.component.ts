import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../shared/services/users.service';

interface User {
  roles: [string];
  id: number;
  username: string;
  response: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.usersService.checkLogin()
      .subscribe((data: User) => {
        const response = data.response;
        console.log(data.response);

        if (response === 'non logged') {
          this.router.navigate(['/login']);
        } else if (data.roles[1] === 'admin') {
          this.router.navigate(['/admin']);
        }
      });
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
