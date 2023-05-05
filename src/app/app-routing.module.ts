import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountHistoryComponent } from './account/account-history/account-history.component';
import { ChangePasswordComponent } from './account/account-edit/change-password/change-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'edit', component: AccountEditComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'history', component: AccountHistoryComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
