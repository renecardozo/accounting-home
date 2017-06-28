import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from "./registro/registro.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { Settings } from './app.config';
import { routing, appRoutingProviders } from './app.routing';
import { IngresoComponent } from './ingreso/ingreso.component';
import { IngresoService } from './services/ingreso/ingreso.service';
import { SaldoComponent } from './saldo/saldo.component';
import { ExpenseService } from './expenses/expenses.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    IngresoComponent,
    SaldoComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    CarouselModule.forRoot(),
    DatePickerModule ,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    IngresoService,
    ExpenseService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
