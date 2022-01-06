import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public createPatient(dataPatient: any): any {
    return this.http.post<any>(environment.protocol + environment.host + '/patient/createPatient', dataPatient);
  }

  public readPatient(id: any): any {
    return this.http.get<any>(environment.protocol + environment.host + '/patient/readPatient', id);
  }

  public uptadePatient(dataPatient: any): any {
    return this.http.put<any>(environment.protocol + environment.host + '/patient/updatePatient', dataPatient);
  }

  public deletePatient(id: any): any {
    return this.http.delete<any>(environment.protocol + environment.host + '/patient/deletePatient', id);
  }

}
