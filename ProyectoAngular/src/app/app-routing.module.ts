import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  { path: '', component: landingComponent, canActivate: [AuthGuard]}, 
  { path: 'login', component: LoginComponent}, 
  { path: 'form', component: FormUserComponent}, 
  { path: 'form/:id', component: FormUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
