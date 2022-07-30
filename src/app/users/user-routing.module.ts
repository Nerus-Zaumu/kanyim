import { UsersComponent } from './users.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: ':type', component: UserComponent},
  {path: 'forgot', component: ForgotPasswordComponent},
  {path: 'reset', component: ResetPasswordComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class UserRoutingModule{};
