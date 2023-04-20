import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciocursosService } from '../servicio.service';
import { Router } from '@angular/router';
import { Cursos } from '../model/cursos';
import { nivelCurso } from '../model/nivelCurso';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  dato:number=0;
  curso: Cursos= new Cursos (nivelCurso.alto,0,"",0)
  cursos : Cursos[]=[]
  
  constructor(private serviciocurso : ServiciocursosService,
  private activarrutas : ActivatedRoute,
  private rutes : Router){

  }
  ngOnInit(): void{
    this.dato = this.activarrutas.snapshot.queryParams["dato"]
    
  }
  addmodificar() {
    this.serviciocurso.addmodificar(this.dato, this.curso)
    this.curso = new Cursos(nivelCurso.alto,0,"",0)
  }
}
