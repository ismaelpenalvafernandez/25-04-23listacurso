import { Component } from '@angular/core';
import { nivelCurso } from '../model/nivelCurso';
import { Cursos } from '../model/cursos';
import { ServiciocursosService } from '../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componentemodificar',
  templateUrl: './componentemodificar.component.html',
  styleUrls: ['./componentemodificar.component.css']
})
export class ComponentemodificarComponent {
  dato:number=0;
  curso: Cursos= new Cursos (nivelCurso.alto,0,"",0)
  cursos : Cursos[]=[]
  
  constructor(private serviciocurso : ServiciocursosService,
  private activarrutas : ActivatedRoute,
  private rutes : Router){

  }
  ngOnInit(): void{
    this.activarrutas.queryParams.subscribe(data => {
    this.dato = data['dato'];
    if(this.dato != 0)
    this.curso = this.serviciocurso.getcursoyid(this.dato)!;
  })
}
  anadir(){
    this.serviciocurso.addCursos(this.curso);
    this.curso=new Cursos(nivelCurso.alto,0,"",0)
  }
  addmodificar() {
    this.serviciocurso.addmodificar(this.dato, this.curso)
    this.curso = new Cursos(nivelCurso.alto,0,"",0)
  }
}

