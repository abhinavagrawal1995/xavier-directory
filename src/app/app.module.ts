import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    NavMenuComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
