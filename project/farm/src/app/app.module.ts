import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';//registration form
import{RouterModule} from '@angular/router';
import{HttpClientModule}from '@angular/common/http';
//component
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

//routes
import{appRoutes} from './routes';
//import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
//import {routes } from './app-routing.module';
import {AppRoutingModule} from './app-routing.module';
import { UiModule } from './ui/ui.module';
//import { FooterComponent } from './footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    //NavbarComponent,
    CartComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes ),
    //RouterModule.forRoot(AppRoutingModule),
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    UiModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
