import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UserComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: [
    // UserComponent
  ]
})
export class UsersModule { }
