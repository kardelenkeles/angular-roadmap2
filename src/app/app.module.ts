import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsFormComponent } from './ngxs-form/ngxs-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {MatNativeDateModule} from "@angular/material/core";
import { InputFieldComponent } from './atoms/input-field/input-field.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LoginFormComponent } from './molecules/login-form/login-form.component';
import { LoginPageComponent } from './organisms/login-page/login-page.component';
import {AuthState} from "./auth.state";



@NgModule({
  declarations: [
    AppComponent,
    NgxsFormComponent,
    InputFieldComponent,
    ButtonComponent,
    LoginFormComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthState]),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
