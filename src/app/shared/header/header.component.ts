import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // breakpoints = [Breakpoints.HandsetPortrait,
  //    Breakpoints.HandsetLandscape,
  //   Breakpoints.TabletLandscape,
  //   Breakpoints.TabletPortrait
  // ];

  breakpointState = false;

  constructor(private breakpointObserver: BreakpointObserver) {

   }

  ngOnInit(): void {
  }

}
