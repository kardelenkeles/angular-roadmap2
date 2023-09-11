import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsFormComponent} from './ngxs-form/ngxs-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {MatNativeDateModule} from '@angular/material/core';
import {InputFieldComponent} from './atomic-design/atoms/input-field/input-field.component';
import {ButtonComponent} from './atomic-design/atoms/button/button.component';
import {LoginFormComponent} from './atomic-design/molecules/login-form/login-form.component';
import {LoginPageComponent} from './atomic-design/organisms/login-page/login-page.component';
import {AuthState} from './atomic-design/auth.state';
import {MediaQueryComponent} from './media-query/media-query.component';
import {ProductComponent} from './product/product.component';
import {
  CommonModule,
  CurrencyPipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import {DataSetComponent} from './data-set/data-set.component';
import {PercentagePipe} from './data-set/percentage.pipe';
import {FilterPipe} from './data-set/filter.pipe';
import {DatatableComponent} from './datatable/datatable.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {DataTablesModule} from 'angular-datatables';
import {AlterBackgroundDirective} from './alter-background/alter-background.directive';
import {AlterBackgroundComponent} from './alter-background/alter-background.component';
import {AlterBackgroundHandlerDirective} from './alter-background/alterBackgroundHandler.directive';
import {RxjsComponent} from './rxjs/rxjs.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChildComponent} from './child/child.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CardComponent } from './card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { TranslocoRootModule } from './transloco-root.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    FilterPipe,
    DatatableComponent,
    AlterBackgroundDirective,
    AlterBackgroundComponent,
    AlterBackgroundHandlerDirective,
    RxjsComponent,
    HomeComponent,
    ChildComponent,
    LoginComponent,
    AdminComponent,
    CardComponent,
    CheckoutComponent,
    ConfirmComponent
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
    FormsModule,
    NgxDatatableModule,
    DataTablesModule,
    AppRoutingModule,
    RouterOutlet,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslocoRootModule


  ],
  providers: [UpperCasePipe, CurrencyPipe, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {
}
