import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const firebaseConfig = {
    apiKey: "AIzaSyByeuXNaAZGImIJjLU3CXU9m6J1q3v_Ml4",
    authDomain: "gamecraft-d6c1c.firebaseapp.com",
    databaseURL: "https://gamecraft-d6c1c.firebaseio.com",
    storageBucket: "gamecraft-d6c1c.appspot.com",
    messagingSenderId: "206354035617"
};


export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouting,
    AuthModule,
    CommonModule,
    DashboardModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
