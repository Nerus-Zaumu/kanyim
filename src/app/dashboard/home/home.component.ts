import { MatTableDataSource } from '@angular/material/table';
import { HomeManagerService } from './../home-manager.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  cols = '3';
  rowHeight = '300px';
  breakpoints = [
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.HandsetLandscape,
  ]


  constructor(private breakpointObserver: BreakpointObserver, public homeManagerService: HomeManagerService,) { }

  dataSource = new MatTableDataSource<Task>(this.homeManagerService.data)
  ngOnInit(): void {
    this.breakpointObserver.observe(this.breakpoints).
    subscribe((state: BreakpointState) => {
      if(state.breakpoints[this.breakpoints[0]]){
        this.cols = '1'
        this.rowHeight = '500px'
      }
      if(state.breakpoints[this.breakpoints[1]]){
        this.cols = '2'
        this.rowHeight = '500px'
      }
      if(state.breakpoints[this.breakpoints[2]] || state.breakpoints[this.breakpoints[3]]){
        this.cols = '1'
        this.rowHeight = '400px'
      }

    })
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator
  }
}
