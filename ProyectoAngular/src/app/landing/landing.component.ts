import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UsersService } from '../service/users.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class landingComponent implements OnInit {
  title = 'User List';

  users: User[] = [];
  errorMessage: string | undefined;

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService, 
    private loginService : LoginService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  delete(user: User): void {
    this.usersService.deleteUser(user.id).subscribe(
      res => this.usersService.getAllUsers().subscribe(
        response => this.users = response
      )
    )
  }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as const,
      responseType: 'json' as const
    };

    this.httpClient.get<any>('http://localhost:8080/api/users', httpOptions)
      .subscribe(
        (response: HttpResponse<any>) => {
          const token = response.headers.get('Authorization');

          if (token) {
            localStorage.setItem('token', token);
          }
          this.users = response.body;
          this.users = this.users.sort((a, b) => b.id - a.id);
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

  logout() {
    this.loginService.logout();
  }
}