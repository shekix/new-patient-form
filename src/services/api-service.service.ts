import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  http = inject(HttpClient);
  private apiUrl = 'https://localhost:7050/api/Patient';

  public getPatients():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  public postPatients(data:any) : Observable<any>{
    return this.http.post<any>(this.apiUrl,data)
   }

   public updatePatient(id:any,data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,data);
   }

   public deletePatient(id:any):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
   }

  private countryUrl = 'https://localhost:7052/api/CountryState/GetCountries';
  private stateUrl = 'https://localhost:7052/api/CountryState';

  public getCountries():Observable<any[]>{
   return this.http.get<any[]>(this.countryUrl);
  }

  public getStates(id:any):Observable<any[]>{
   return this.http.get<any[]>(`${this.stateUrl}/${id}`);
  }

private RegistrationUrl = 'https://localhost:7050/api/Registration'

public postUser(data:any):Observable<any>{
return this.http.post<any>(this.RegistrationUrl,data);
}

public getUser():Observable<any[]>{
  return this.http.get<any[]>(this.RegistrationUrl);
}

}
