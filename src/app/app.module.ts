import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { DirectoryComponent } from './directory/directory.component';
import {FormsModule} from "@angular/forms";


import { environment } from '../environments/environment';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    NavMenuComponent,
    LandingPageComponent,
    LoginComponent,
    DirectoryComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
