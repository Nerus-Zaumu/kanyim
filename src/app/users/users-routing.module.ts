import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'forgot', component: ForgotPasswordComponent},
    {path: 'reset', component: ResetPasswordComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class UsersRoutingModule{}
