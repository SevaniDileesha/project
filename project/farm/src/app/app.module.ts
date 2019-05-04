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


import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DeliverDetailsComponent } from './deliver-details/deliver-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import {DeliverService } from './deliver/deliver.service';
import {ProductService } from './product/product.service';


import { PlantsComponent } from './plants/plants.component';
import { AddProductComponent } from './add-product/add-product.component';
//import { ValidateService } from './services/validate.service'
import {FlashMessagesModule} from 'angular2-flash-messages';
//import { AuthService } from "./services/auth.service";
import { WorkersComponent } from './workers/workers.component';



//import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CartComponent } from './cart/cart.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminpanelnavComponent } from './adminpanelnav/adminpanelnav.component';
import { DistributerComponent } from './distributer/distributer.component';
import { WorkerprofileComponent } from './workerprofile/workerprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    ContactusComponent,
    DashboardComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    AdminSignupComponent,
    DeliverDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    PlantsComponent,
    AddProductComponent,
    //AddProductComponent
    //AddProductComponent
    WorkersComponent,
    CartComponent,
    FileSelectDirective,
    ProductDetailsComponent,
    AdminpanelComponent,
    AdminpanelnavComponent,
    DistributerComponent,
    WorkerprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    //AngularFontAwesomeModule
    //MDBBootstrapModule.forRoot()
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    //FormBuilder,
    //FormGroup,
    //Validators
    //Response
    //SlimLoadingBarModule
    //AgmCoreModule.forRoot({
      //apiKey: 'YOUR_KEY'
    //})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,DeliverService,ProductService],
  // declarations:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
