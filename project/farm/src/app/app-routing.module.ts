import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PlantsComponent } from './plants/plants.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DeliverDetailsComponent } from './deliver-details/deliver-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'admin',
    pathMatch: 'full',
    component: AdminComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
 },
 {
  path: 'home',
  component: HomeComponent
},
 {
  path: 'adminsiginup',
  component: AdminSignupComponent
 },
 {
  path: 'plants',
  component: PlantsComponent
 },
 {
  path: 'login',
  //component: ContactusComponent
  component: SignInComponent
},
{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'userprofile',
  component: UserProfileComponent
},
{path:'dashboard',
 component:DashboardComponent
},
{
  path: 'checkout',
  component: CheckoutComponent 
},
{
  path: 'deliverdetails',
  component: DeliverDetailsComponent 
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
