import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';//registration form
import{RouterModule,Routes} from '@angular/router';
import{HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
//component
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//routes

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserService } from './shared/user.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'admin', component: AdminComponent},
  {path:'contact', component: ContactusComponent},
  {path:'login', component: SignInComponent},
  {path:'signup', component: SignUpComponent},
  {path:'userprofile', component:UserProfileComponent },
  {path:'dashboard', component:DashboardComponent },
  {path:'checkout', component:CheckoutComponent },
  {path:'cart', component:ShoppingCartComponent },
  {path:'adminsiginup', component:AdminSignupComponent },
  {path:'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    ContactusComponent,
    AdminComponent,
    DashboardComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
