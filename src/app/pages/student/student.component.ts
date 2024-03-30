import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog} from '@angular/material/dialog';
import { AddStudentComponent } from '../../modal/add-student/add-student.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddStudentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
