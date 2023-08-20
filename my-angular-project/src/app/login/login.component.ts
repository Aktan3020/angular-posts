import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private authServices:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.setItem('user',JSON.stringify({username:'admin',password:'12345678'})  )
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const admin = JSON.parse(localStorage.getItem('user') as any)
      if(username === admin.username && password === admin.password){
        this.authServices.setAuth(true)
        this.router.navigate(['/posts']); 
      }
    }
  }
}
