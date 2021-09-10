import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/coment/login/login.component';
import {HomeComponent} from './component/coment/home/home.component';
import {RegisterComponent} from './component/coment/register/register.component';
import {ShopComponent} from './component/coment/shop/shop.component';
import {CartComponent} from './component/coment/cart/cart.component';
import {UsercomponentComponent} from './component/user/usercomponent/usercomponent.component';
import {LoginGuard} from './login-guard';
import {PdfComponent} from './component/coment/pdf/pdf.component';
import {AdmincomponentComponent} from './component/admin/admincomponent/admincomponent.component';
import {LoginAdmin} from './login_Admin';
import {ModeratorComponent} from './component/moderator/moderator.component';
import {Login_moderator} from './login_moderator';
import {ContactComponent} from './component/coment/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'panie', component: CartComponent},
  {path: 'user', component: UsercomponentComponent, canActivate: [LoginGuard]},
  {path: 'pdf', component: PdfComponent},
  {path: 'admin', component: AdmincomponentComponent, canActivate: [LoginAdmin]},
  {path: 'mod', component: ModeratorComponent, canActivate: [Login_moderator]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
