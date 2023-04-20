import { nivelCurso } from "./nivelCurso";

export class Cursos {
    id: number = 0;
    nombre: string = '';
    duracion: number = 0;
    nv: nivelCurso;
    constructor(nv: nivelCurso,id: number,nombre: string,duracion: number) {
        this.id= id;
        this.nombre= nombre;
        this.duracion= duracion;
        this.nv = nv;
    }
}