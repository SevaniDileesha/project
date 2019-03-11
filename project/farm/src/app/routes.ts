    
import { Routes } from '@angular/router';
//import { UserComponent } from './user/user.component';
//import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
 
export const appRoutes: Routes = [
    {
        //path: 'signup', component: UserComponent,
        //children: [{ path: '', component: SignUpComponent }]


        

    },
    
{
path:'',redirectTo:'/signup',pathMatch:'full'
}
    
]; 