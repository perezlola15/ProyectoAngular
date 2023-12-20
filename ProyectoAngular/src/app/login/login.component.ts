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

  /*onSubmit(): void {
    this.loginService.login(this.email, this.password)
      .subscribe(
        response => {
          this.loginService.saveToken(response.token);
          this.router.navigate(['landing']);
        },
        error => {
          this.errorMessage = 'Usuario no válido';
        }
      );
  } */

  login(form: NgForm) {
    console.log('form value', form.value);
    this.loginService.login(this.creds).subscribe(response => {
      this.router.navigate(['/']);
    })
  }

  
}



