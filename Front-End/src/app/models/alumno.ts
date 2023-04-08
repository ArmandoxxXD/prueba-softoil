export class Alumno {
    id!:number;
    nombre: String;
    matricula: String;
    fechaNacimiento: Date;

    constructor(nombre:String,matricula: String, fechaNacimiento: Date){
        this.nombre=nombre;
        this.matricula=matricula;
        this.fechaNacimiento=fechaNacimiento;
    }
}

