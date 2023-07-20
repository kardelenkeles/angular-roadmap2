import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsFormComponent } from './ngxs-form/ngxs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
