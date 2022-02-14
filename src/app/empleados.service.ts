import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class EmpleadosService {

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService){

    }

    empleados:Empleado[] = [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("Ana","Martín","Directora",5500),
        new Empleado("María","Fernandez","Jefa sección",4500),
        new Empleado("Laura","López","Administrativo",3500),
      ];
    
    agregarEmpleadoServicio(empleado:Empleado) {
        this.servicioVentanaEmergente.muestraMensaje("Empleado añadido, nombre:"+empleado.nombre);
        this.empleados.push(empleado);
    }

}
