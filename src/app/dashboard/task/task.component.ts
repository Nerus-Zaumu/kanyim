import { HomeManagerService } from './../home-manager.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public homeManagerService: HomeManagerService, @Optional() public dialogRef: MatDialogRef<TaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {route: ActivatedRoute}, private activatedRoute: ActivatedRoute, private router: Router) {
    }

  ngOnInit(): void {
     const urlSections = this.router.url.split('/')
     const taskID = urlSections[urlSections.length - 1]
     this.homeManagerService.loadedTask = this.homeManagerService.getCurrentlyActiveTask(taskID)
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
