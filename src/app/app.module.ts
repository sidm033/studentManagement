import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { StudentComponent } from './pages/student/student.component';
import { AppRoutingModule } from './app.routes';
import { AddStudentComponent } from './modal/add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
  ],
  exports: [
    StudentComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
