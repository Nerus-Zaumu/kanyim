import { HomeManagerService } from './../home-manager.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public homeManagerService: HomeManagerService, @Optional() public dialogRef: MatDialogRef<TaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {route: ActivatedRoute}, private activatedRoute: ActivatedRoute) {
      data.route.params.subscribe(params => {
        console.log(params)
      })
    }

  ngOnInit(): void {
    // console.log('I have been loaded')
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   if(!paramMap.has('id')) {
    //     console.log('I reached here')
    //     return;
    //   }
    //   const taskID = paramMap.get('id')
    //   console.log('This is ID: ', taskID)
    //   console.log('Entire paramMap Tree: ', this.activatedRoute.snapshot.paramMap)
    //   this.homeManagerService.loadedTask = this.homeManagerService.getCurrentlyActiveTask(taskID!)
    //   console.log('This is the currently active task: ', this.homeManagerService.loadedTask)
    // })
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
