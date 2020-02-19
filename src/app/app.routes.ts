import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'perfil', component: PerfilComponent, canActivate: [ GuardService ] },
    { path: 'buscar/:nombre', component: BusquedaComponent },
    { path: '**', pathMatch:'full', redirectTo: '/home' }
];

export const appRouting = RouterModule.forRoot(routes,{useHash:true});