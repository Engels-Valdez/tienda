import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material//
import { MaterialModule } from './modules/material/material.module';

//Rutas//
import { appRouting } from './app.routes';

//Servicios//
import { ProductoService } from './services/producto.service';
import { CarritoService } from './services/carrito.service';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { VermasPipe } from './pipes/vermas.pipe';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetalleComponent,
    VermasPipe,
    BusquedaComponent,
    CarritoComponent,
    FooterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    appRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductoService,
    CarritoService,
    AuthService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
