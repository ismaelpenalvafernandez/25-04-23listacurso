import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiciocursosService } from './servicio.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { ComponentemodificarComponent } from './componentemodificar/componentemodificar.component';
import { ComponentelistaComponent } from './componentelista/componentelista.component';

@NgModule({
  declarations: [
    AppComponent,
    ModificarComponent,
    ComponentemodificarComponent,
    ComponentelistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiciocursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
