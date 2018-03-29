import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

interface Subjects {
  subject_id: number;
  subject_name: string;
  subject_description: string;
}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subjects;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getSubjects()
      .subscribe((data: Subjects) => {
        this.subjects = data;
      });
  }
}
