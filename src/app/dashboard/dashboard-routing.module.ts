import { BacklogComponent } from './backlog/backlog.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    {path: ':id', component: TaskComponent}
  ]},
  {path: 'manage', component: ManageComponent},
  {path: 'create', component: CreateComponent},
  {path: 'backlog', component: BacklogComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class DashboarRoutingModule { }
