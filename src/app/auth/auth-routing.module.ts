import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {AdminComponent} from '../admin/admin.component';
import {StudentComponent} from '../student/student.component';
import {SubjectComponent} from '../admin/subject/subject.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent}
      ]},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/subject', component: SubjectComponent},
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
