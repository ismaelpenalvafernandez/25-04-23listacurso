import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentelistaComponent } from './componentelista/componentelista.component';
import { ComponentemodificarComponent } from './componentemodificar/componentemodificar.component';
const routes: Routes = [
  {path: '',component:ComponentelistaComponent,children: [
  { path: 'listar', component: ComponentelistaComponent },
  { path: 'modificar/:id', component: ComponentemodificarComponent },
  ],
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
