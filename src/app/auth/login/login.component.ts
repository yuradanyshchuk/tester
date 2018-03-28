import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UsersService} from '../../shared/services/users.service';
import {AuthService} from '../../shared/services/auth.service';

interface User {
  roles: [string];
  id: number;
  username: string;
  response: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });

    this.usersService.checkLogin()
      .subscribe((data: User) => {
        const response = data.response;

        if (response === 'logged') {
          if (data.roles[1] === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/student']);
          }
        }
      });


  }

  onSubmit() {
    const formData = this.form.value;

    console.log(formData);

    this.usersService.getLogin(formData.login, formData.password)
      .subscribe((user: User) => {
        if (user) {
          if (user.roles[1] === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/student']);
          }
        }
      });
  }

}
