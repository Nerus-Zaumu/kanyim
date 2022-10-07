import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})

export class SignupComponent implements OnInit {

  passwordState = false;

  constructor(public dataManagerService: DataManagerService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(){
    this.passwordState = !this.passwordState
  }

}
