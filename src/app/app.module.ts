import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsercomponentComponent} from './component/user/usercomponent/usercomponent.component';
import {AdmincomponentComponent} from './component/admin/admincomponent/admincomponent.component';
import {MenuComponent} from './component/coment/menu/menu.component';
import {FooterComponent} from './component/coment/footer/footer.component';
import {HomeComponent} from './component/coment/home/home.component';
import {LoginComponent} from './component/coment/login/login.component';
import {CartComponent} from './component/coment/cart/cart.component';
import {RegisterComponent} from './component/coment/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShopComponent} from './component/coment/shop/shop.component';
import {ProduitsComponent} from './component/coment/shop/produits/produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginGuard} from './login-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfComponent } from './component/coment/pdf/pdf.component';
import { FeedbackComponent } from './component/user/feedback/feedback.component';
import { InfoComponent } from './component/admin/info/info.component';
import {LoginAdmin} from './login_Admin';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import { MessageComponent } from './component/admin/message/message.component';
import { MotdepassComponent } from './component/user/motdepass/motdepass.component';
import { FactureComponent } from './component/admin/facture/facture.component';
import { CommandsComponent } from './component/user/commands/commands.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { EnvoyerfactureComponent } from './component/admin/envoyerfacture/envoyerfacture.component';
import { AdduserComponent } from './component/admin/adduser/adduser.component';
import {Login_moderator} from './login_moderator';
import { ModeratorComponent } from './component/moderator/moderator.component';
import { ContactComponent } from './component/coment/contact/contact.component';


@NgModule({
    declarations: [
        AppComponent,
        UsercomponentComponent,
        AdmincomponentComponent,
        MenuComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        CartComponent,
        RegisterComponent,
        ShopComponent,
        ProduitsComponent,
        PdfComponent,
        FeedbackComponent,
        InfoComponent,
        MessageComponent,
        MotdepassComponent,
        FactureComponent,
        CommandsComponent,
        EnvoyerfactureComponent,
        AdduserComponent,
        ModeratorComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTabsModule,
        NgbModule,
        MatGridListModule
    ],
    providers: [ LoginGuard, LoginAdmin , Login_moderator, authInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
