import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  form!: FormGroup;

  idFormControl = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+')]);
  nombresFormControl = new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('([A-Za-z]|[A-Za-z]([A-Za-z]|\\s))+')]);
  apellidosFormControl = new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('([A-Za-z]|[A-Za-z]([A-Za-z]|\\s))+')]);
  generoFormControl = new FormControl('', [Validators.required]);
  fechaNFormControl = new FormControl('', [Validators.required]);
  estadoFormControl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('([A-Za-z]|[A-Za-z]([A-Za-z]|\\s))+')]);
  etniaFormControl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('([A-Za-z]|[A-Za-z]([A-Za-z]|\\s))+')]);
  epsFormControl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('([A-Za-z]|[A-Za-z]([A-Za-z]|\\s))+')]);
  direccionFormControl = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  telefonoFormControl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')]);
  correoFormControl = new FormControl('', [Validators.required, Validators.email]);

  selectedValueGenero = '';
  generos = [
    {value: 'Hombre', viewValue: 'Hombre'},
    {value: 'Mujer', viewValue: 'Mujer'},
    {value: 'Otro', viewValue: 'Otro'}
  ];

  minDate: Date;
  maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private patienService: PatientService,
  ) {
    this.buildForm();
    const currentYear = new Date().getUTCFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 120, 1, 1);
    this.maxDate = new Date(currentYear - 0, currentMonth, currentDay);
   }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      identificacion: this.idFormControl,
      nombres: this.nombresFormControl,
      apellidos: this.apellidosFormControl,
      genero: this.generoFormControl,
      fechaNacimiento: this.fechaNFormControl,
      estadoCivil: this.estadoFormControl,
      etnia: this.etniaFormControl,
      eps: this.epsFormControl,
      direccion: this.direccionFormControl,
      telefono: this.telefonoFormControl,
      email: this.correoFormControl,
    });
  }

  createPatient(): void {
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      try {
        this.patienService.createPatient(value).subscribe( respuesta => {
        alert('REGISTRO EXITOSO');
        console.log(respuesta);
      });
      } catch {
        alert('EL PACIENTE YA EXISTE');
      }
    }
    else {
      alert('Los campos no son validos por favor asegurece de llenarlos correctamente');
    }
  }

}
