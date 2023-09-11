import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgxsFormComponent } from './ngxs-form/ngxs-form.component';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ngxs', component: NgxsFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent , canActivate: [LoginGuard]},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {

}
