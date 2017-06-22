import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {RegistroComponent} from "./registro/registro.component";
import { Settings } from './app.config';
import { routing, appRoutingProviders } from './app.routing';
import { GastoComponent } from './gasto/gasto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastoService } from './services/gasto/gasto.service';
import { IngresoService } from './services/ingreso/ingreso.service';
import { SaldoComponent } from './saldo/saldo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    GastoComponent,
    IngresoComponent,
    SaldoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    GastoService,
    IngresoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
