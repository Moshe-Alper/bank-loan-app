import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NewLoanFormComponent } from './pages/new-loan-form/new-loan-form.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LoanApplicationListComponent } from './pages/loan-application-list/loan-application-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewLoanFormComponent,
    BankerListComponent,
    CustomerListComponent,
    LoanApplicationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
