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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {MatNativeDateModule} from "@angular/material/core";
import { InputFieldComponent } from './atomic-design/atoms/input-field/input-field.component';
import { ButtonComponent } from './atomic-design/atoms/button/button.component';
import { LoginFormComponent } from './atomic-design/molecules/login-form/login-form.component';
import { LoginPageComponent } from './atomic-design/organisms/login-page/login-page.component';
import {AuthState} from "./atomic-design/auth.state";
import { MediaQueryComponent } from './media-query/media-query.component';
import { ProductComponent } from './product/product.component';
import { CommonModule, PercentPipe } from '@angular/common';
import { DataSetComponent } from './data-set/data-set.component';
import { PercentagePipe } from './data-set/percentage.pipe';
import { FilterPipe } from './data-set/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    NgxsFormComponent,
    InputFieldComponent,
    ButtonComponent,
    LoginFormComponent,
    LoginPageComponent,
    MediaQueryComponent,
    ProductComponent,
    DataSetComponent,
    PercentagePipe,
    FilterPipe

  ],
  imports: [
    CommonModule,
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
