import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
// import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de Empleados';

  // constructor(private miServicio:ServicioEmpleadosService, private miServicioEmpleados:EmpleadosService) {
  constructor(private miServicioEmpleados:EmpleadosService) {
  }

  ngOnInit(): void {
    this.empleados = this.miServicioEmpleados.empleados;    
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicioEmpleados.agregarEmpleadoServicio(miEmpleado);
    // this.miServicio.muestraMensaje("Empleado añadido:"+miEmpleado.nombre);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
