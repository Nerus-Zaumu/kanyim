import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'users/dashboard/home', pathMatch: 'full'
  },
  {
    path: 'users/auth',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
},
{
  path: 'users/dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
