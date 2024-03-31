import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddStudentComponent } from '../../modal/add-student/add-student.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule,   MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddStudentComponent, {width: "400px"});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
