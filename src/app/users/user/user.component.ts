import { Router, ActivatedRoute } from '@angular/router';
import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  passwordState = false;

  constructor(public dataManagerService: DataManagerService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(){
    this.passwordState = !this.passwordState
  }

}
