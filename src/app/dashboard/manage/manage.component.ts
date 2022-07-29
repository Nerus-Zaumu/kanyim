import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DataManagerService } from './../../users/data-manager.service';
import { HomeManagerService } from './../home-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  passwordState = false;
  cols = '2'
  rowHeight = '500px'

  breakpoints = [
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.HandsetLandscape,
  ]

  constructor(public homeManagerService: HomeManagerService,
    public dataManagerService: DataManagerService,
    private breakpointObserver: BreakpointObserver) { }

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

  togglePasswordVisibility(){
    this.passwordState = !this.passwordState
  }

}
