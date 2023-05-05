import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountHistoryComponent } from './account/account-history/account-history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangePasswordComponent } from './account/account-edit/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    DetailsComponent,
    AccountEditComponent,
    AccountHistoryComponent,
    NavbarComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
