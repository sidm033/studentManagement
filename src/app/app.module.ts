import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
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
    FormsModule,
    ReactiveFormsModule
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  // providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
