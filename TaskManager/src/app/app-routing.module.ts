import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"about", component:AboutComponent},
  {path:"", component:DashboardComponent, pathMatch:"full"} //if path is empty, redirect to dashboard component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
