import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  private urlLogIn = 'http://vps9615.hyperhost.name:443/api/login/index';
  private urlLogOut = 'http://vps9615.hyperhost.name:443/api/login/logout';
  private urlStatusLogIn = 'http://vps9615.hyperhost.name:443/api/login/isLogged';
  private urlGetSubjects = 'http://vps9615.hyperhost.name:443/api/Subject/getRecords';

  constructor(
    private http: HttpClient
  ) { }

  getLogin(login: string, password: string) {
    const body = {username: login, password: password};
    return this.http.post(this.urlLogIn, body);
  }

  checkLogin() {
    return this.http.get(this.urlStatusLogIn);
  }

  outLogin() {
    return this.http.get(this.urlLogOut);
  }

  getSubjects() {
    return this.http.get(this.urlGetSubjects);
  }
}
