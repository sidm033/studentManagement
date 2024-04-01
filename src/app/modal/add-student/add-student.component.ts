import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import moment from 'moment';

import { ApiService } from '../../service/api.service';
import { AddStudent } from '../../helpers/student';
import { countryList } from './data';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    AsyncPipe,
  ],
  providers: [ApiService, provideNativeDateAdapter()],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {


  addStudent!: FormGroup;

  loading: boolean = false;
  submitted: boolean = false;

  imagePreview: any = '//www.gravatar.com/avatar/c1c5f623b7590c4ecefaff5b9f78409a?s=150&r=pg&d=mm';

  country = countryList;
  maxDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    // private apiService: ApiService,
    public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<AddStudentComponent>,
    ) {
     
  }

  ngOnInit(): void {
    this.addStudent = this.formBuilder.group({
      name: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(80),
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      dateOfBirth: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      country: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      avatar: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addStudent.controls;
  }

  onFileChange(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePreview = event.target?.result?.toString();
        this.addStudent?.get('avatar')?.setValue(this.imagePreview);
      }
    }

  }


  closeDialog(){
    this.dialogRef.close({ event:'Cancel' });
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.addStudent.invalid) {
      return;
    }

    const parameter: AddStudent = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      dob: moment(this.f['dateOfBirth'].value).format('YYYY-MM-DD'),
      country: this.f['country'].value,
      avatar: this.f['avatar'].value,
    };

    this.dialogRef.close({
      event: 'added',
      data: parameter
    });

    /* this.apiService.addStudent(parameter)
      .subscribe(res => {
        console.log(res);
      }); */

  }

}
