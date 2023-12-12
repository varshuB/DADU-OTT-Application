import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/Services/admin.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId: any;
  password: any;
  // loginForm!: FormGroup;
  // submitted = false;
  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
    // private authenticationService: AuthenticationService,
    // private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   user_name: ['', Validators.required],
    //   user_password: ['', Validators.required]
    // });
  }

  adminLogin(emailId: any, password: any) {
    this.adminService.adminLogin(emailId, password)
      .subscribe((_response) => {
        console.log("Login Successfully");
        this.router.navigate(['/admin'])
      })
  }
}
