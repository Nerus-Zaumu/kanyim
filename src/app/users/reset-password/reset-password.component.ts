import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../user/user.component.css']
})
export class ResetPasswordComponent implements OnInit {

  passwordState = false;

  constructor(public dataManagerService: DataManagerService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(){
    this.passwordState = !this.passwordState
  }

}
