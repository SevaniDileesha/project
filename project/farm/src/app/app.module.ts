import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AgmCoreModule } from '@agm/core';

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
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DeliverDetailsComponent } from './deliver-details/deliver-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';


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
    AdminSignupComponent,
    DeliverDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
    //AgmCoreModule.forRoot({
      //apiKey: 'YOUR_KEY'
    //})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  // declarations:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
