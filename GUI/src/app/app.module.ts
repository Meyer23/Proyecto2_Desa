import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UsuariosComponent } from './pages/usuarios/usuarios.component';
//import { RolesComponent } from './pages/roles/roles.component';
//import { ModulosComponent } from './pages/modulos/modulos.component';
//import { LoginComponent } from './pages/login/login.component';
import {ComponentsModule} from "./shared/components/components.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./authentication/interceptor/auth.interceptor";
//import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent
    //HomeComponent,
    //UsuariosComponent,
    //RolesComponent,
    //ModulosComponent
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    ComponentsModule, 
    MatSidenavModule, 
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
