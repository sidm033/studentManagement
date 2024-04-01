import { Component, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog} from '@angular/material/dialog';
import {JsonPipe} from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AddStudentComponent } from '../../modal/add-student/add-student.component';
import { AddStudent } from '../../helpers/student';
import { AgeCalculate } from '../../helpers/ageCalculate.pipe';
import { CountryName } from '../../helpers/country.pipe';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, 
    MatToolbarModule,   
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    AgeCalculate,
    CountryName,
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  isLoading: boolean = true;
  studentList: AddStudent[] = [];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddStudentComponent, {width: "400px"});

    dialogRef.afterClosed().subscribe(result => {
      
      if (result.event === 'added') {
        this.studentList.push(result.data);
      };

    });
  }

}
