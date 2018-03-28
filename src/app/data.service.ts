import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'http://vps9615.hyperhost.name:443/api/';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
