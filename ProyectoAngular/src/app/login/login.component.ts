import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Credentials } from '../model/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password: ''
  }
  
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login(form: NgForm) {
    console.log('form value', form.value);
    this.loginService.login(this.creds).subscribe(response => {
      this.router.navigate(['landing']);
    })
  }

  
}



