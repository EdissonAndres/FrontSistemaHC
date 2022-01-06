import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicHistoryService {

  constructor(private http: HttpClient) { }

  public createClinicHistory(dataClinicHistory: any): any {
    return this.http.post<any>(environment.protocol + environment.host + '/clinicHistory/createClinicHistory', dataClinicHistory);
  }

  public readClinicHistory(id: any): any {
    return this.http.get<any>(environment.protocol + environment.host + '/clinicHistory/readClinicHistory', id);
  }

  public uptadeClinicHistory(dataClinicHistory: any): any {
    return this.http.put<any>(environment.protocol + environment.host + '/clinicHistory/updateClinicHistory', dataClinicHistory);
  }

  public deleteClinicHistory(id: any): any {
    return this.http.delete<any>(environment.protocol + environment.host + '/clinicHistory/deleteClinicHistory', id);
  }
}
