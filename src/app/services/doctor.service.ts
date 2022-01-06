import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  public createDoctor(dataDoctor: any): any {
    return this.http.post<any>(environment.protocol + environment.host + '/doctor/createDoctor', dataDoctor);
  }

  public readDoctor(id: any): any {
    return this.http.get<any>(environment.protocol + environment.host + '/doctor/readDoctor', id);
  }

  public uptadeDoctor(dataDoctor: any): any {
    return this.http.put<any>(environment.protocol + environment.host + '/doctor/updateDoctor', dataDoctor);
  }

  public deleteDoctor(id: any): any {
    return this.http.delete<any>(environment.protocol + environment.host + '/doctor/deleteDoctor', id);
  }

}
