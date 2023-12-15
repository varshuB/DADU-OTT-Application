import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/Services/admin.service';
import { catchError } from 'rxjs';
import { Admin } from '../admin/Models/adminLogin.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  currentUser: Admin = {
    emailId: '',
    password: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  adminLogin() {
    this.adminService.adminLogin()
      .subscribe((_response) => {
        if (this.currentUser.emailId == 'admin'
          && this.currentUser.password == 'admin') {
          this.router.navigateByUrl('/admin')
        } else {
          alert('something went wrong');
        }
      })
  }
}
