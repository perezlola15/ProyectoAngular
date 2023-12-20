import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UsersService } from '../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user: User = new User();
  title: string = "Student registration";

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.activatedRoute.params.subscribe(
      u => {
        let id = u['id'];
        if (id) {
          this.usersService.getById(id).subscribe(
            us => this.user = us
          );
        }
      }
    );
  }

  create(): void {
    this.usersService.createUser(this.user).subscribe(
      response => this.router.navigate([''])
    );
  }

  update(): void {
    this.usersService.updateUser(this.user).subscribe(
      response => {
        this.router.navigate(['']);
      },
    );
  }
  

}
