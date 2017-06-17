import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

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
    }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true});
