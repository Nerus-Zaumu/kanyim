import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { DashboarRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { BacklogComponent } from './backlog/backlog.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard.component';
import { SplicerPipe } from './pipes/splicer.pipe';
import { BacklogSplicerPipe } from './pipes/backlog-splicer.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    BacklogComponent,
    CreateComponent,
    ManageComponent,
    DashboardComponent,
    TaskComponent,
    SplicerPipe,
    BacklogSplicerPipe,
  ],
  imports: [
    DashboarRoutingModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports: [DashboardComponent],

})
export class DashboardModule { }
