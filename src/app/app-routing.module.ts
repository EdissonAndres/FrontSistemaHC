import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ReadPatientComponent } from './read-patient/read-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/patient',
    pathMatch: 'full',
  },
  { path: 'patient',
    component: PatientComponent
  },
  { path: 'readPatient',
    component: ReadPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
