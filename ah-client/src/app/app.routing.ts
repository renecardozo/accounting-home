import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ExpensesComponent } from './expenses/expenses.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'item', component: ItemComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
      path: 'registro', component: RegistroComponent
    },
    {
      path: 'ingreso', component: IngresoComponent
    },
    {
        path:'gastos', component: ExpensesComponent
    }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true});
