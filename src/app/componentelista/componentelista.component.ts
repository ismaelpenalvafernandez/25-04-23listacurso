import { Component } from '@angular/core';
import { nivelCurso } from '../model/nivelCurso';
import { ServiciocursosService } from '../servicio.service';
import { Cursos } from '../model/cursos';

@Component({
  selector: 'app-componentelista',
  templateUrl: './componentelista.component.html',
  styleUrls: ['./componentelista.component.css']
})
export class ComponentelistaComponent {
  curso=new Cursos(nivelCurso.alto,0,"",0)
  Cursos:Cursos []=[]
  dato:number=0;

  constructor(private serviciocurso: ServiciocursosService){

    this.Cursos=this.serviciocurso.getcurso()
  }
  anadir(){
  this.serviciocurso.addCursos(this.curso);
  this.curso=new Cursos(nivelCurso.alto,0,"",0)
}
  modificar(){
   this.serviciocurso.addmodificar(this.dato,this.curso)
   this.curso=new Cursos(nivelCurso.alto,0," ",0)
}
  update(number:number){
    number=this.dato
  }
}

