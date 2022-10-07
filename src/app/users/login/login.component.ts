import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dataManagerService: DataManagerService) { }

  passwordState = false;

  ngOnInit(): void {
  }

  togglePasswordVisibility(){
    this.passwordState = !this.passwordState
  }

}
