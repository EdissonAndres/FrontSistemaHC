import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-read-patient',
  templateUrl: './read-patient.component.html',
  styleUrls: ['./read-patient.component.scss']
})
export class ReadPatientComponent implements OnInit {
  form!: FormGroup;

  idFormControl = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+')]);

  constructor(
    private formBuilder: FormBuilder,
    private patienService: PatientService,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      identificacion: this.idFormControl,
    });
  }

  readPatient(): void {
    if (this.form.valid) {
      const value = this.form.value.identificacion;
      const id = parseInt(value);
      console.log(typeof(id));
      try {
        this.patienService.readPatient(id).subscribe( respuesta => {
        console.log(respuesta);
      });
      } catch {
        alert('EL PACIENTE NO EXISTE');
      }
    }
    else {
      alert('Los campos no son validos por favor asegurece de llenarlos correctamente');
    }
  }
}
