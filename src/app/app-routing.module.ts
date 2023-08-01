import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgxsFormComponent } from './ngxs-form/ngxs-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ngxs', component: NgxsFormComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
  
}
