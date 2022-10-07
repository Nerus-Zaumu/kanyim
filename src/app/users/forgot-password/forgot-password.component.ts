import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public dataManagerService: DataManagerService) { }

  ngOnInit(): void {
  }

}
