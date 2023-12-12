import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Models/adminLogin.model';
import { environment } from 'src/environments/environment';

const headerOption = {
  headers: new HttpHeaders({
    "content-Type": 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  adminLogin(emailid: string, password: string): Observable<Admin> {
    // const login = {
    //   emailid: 'admin',
    //   password: 'admin'
    // }
    return this.http.post<Admin>(`${environment.apiUrl1}/AuthenicateAdminLogin`, headerOption);
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/GetAllCategory`);
  }
}

