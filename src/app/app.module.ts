import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiciocursosService } from './servicio.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModificarComponent
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
