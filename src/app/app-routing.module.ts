import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhaComponent } from './abha/abha.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { RegisterSigninComponent } from './register-signin/register-signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'abha', component: AbhaComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'registration', component: RegisterSigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
