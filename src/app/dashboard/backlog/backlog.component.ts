import { HomeManagerService } from './../home-manager.service';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  cols = '3'
  rowHeight = '500px'

  breakpoints = [
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.HandsetLandscape,
  ]


  constructor(private breakpointObserver: BreakpointObserver, public homeManagerService: HomeManagerService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(this.breakpoints).
    subscribe((state: BreakpointState) => {
      if(state.breakpoints[this.breakpoints[0]]){
        this.cols = '1'
        this.rowHeight = '700px'
      }
      if(state.breakpoints[this.breakpoints[1]]){
        this.cols = '2'
        this.rowHeight = '700px'
      }
      if(state.breakpoints[this.breakpoints[2]] || state.breakpoints[this.breakpoints[3]]){
        this.cols = '1'
        this.rowHeight = '600px'
      }

    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
