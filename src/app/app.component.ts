import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

interface Info {
  response: string;
  systeminfo: {
    name: string;
    author: string;
    startdate: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data: Info) => {
      console.log(data);
    });
  }
}
