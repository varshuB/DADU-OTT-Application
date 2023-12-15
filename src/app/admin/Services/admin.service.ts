import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Models/adminLogin.model';
import { environment } from 'src/environments/environment';
import { Category } from '../Models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const headerOption = {
  headers: new HttpHeaders({
    "content-Type": 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  currentCategory: Category = {
    categoryId: '',
    categoryName: '',
    CategoryLogo: [],
    ImageName: '',
    Sequence: null,
    uploadedFileUrl: '',
    CategoryCode: null
  }

  constructor(private http: HttpClient) { }

  adminLogin(): Observable<Admin> {
    const login = {
      emailId: 'admin',
      password: 'admin'
    }
    return this.http.post<Admin>(`${environment.adminApiUrl}/authenicateadmin`, login, headerOption);
  }

  getAllCategory(): Observable<Category[]> {
    // return this.http.get<Category[]>(this.mockUrl, headerOption);
    return this.http.get<Category[]>(`${environment.adminApiUrl}/getallcategory`, headerOption);
  }

  addCategory(): Observable<Category> {
    return this.http.post<Category>(`${environment.adminApiUrl}/addcategory`, headerOption);
  }
}