export class Curso {
    id: number;
    nombre: string;
    plataforma: string;
    lanzamiento: number;
    duracion: number;
   
    constructor(
      id: number,
      nombre: string,
      plataforma: string,
      lanzamiento: number,
      duracion: number,
    ) {
      this.id = id;
      this.nombre = nombre;
      this.plataforma = plataforma;
      this.lanzamiento = lanzamiento;
      this.duracion = duracion;
    }
   }