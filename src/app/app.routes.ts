import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';


export const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
