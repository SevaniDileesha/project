import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes= [
  {path: 'signup', component: UserComponent,children: [{ path: '', component: SignUpComponent }]},
  {path: 'cart', component: CartComponent}
  
];

@NgModule({
  //exports: [ RouterModule.forRoot(routes) ]

 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }


//,children: [{ path: '', component: SignUpComponent }]},