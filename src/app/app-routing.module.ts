import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cursos } from './model/cursos';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  { path: "modificar", component:ModificarComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
