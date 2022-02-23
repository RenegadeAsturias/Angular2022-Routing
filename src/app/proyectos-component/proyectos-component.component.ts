import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicioEmpleados:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.miServicioEmpleados.empleados;    
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicioEmpleados.agregarEmpleadoServicio(miEmpleado);
    // this.miServicio.muestraMensaje("Empleado añadido:"+miEmpleado.nombre);
    
    this.router.navigate(['']); // Redireccionamiento automático para ir al Home después de agregar un Empleado
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  irHome(){
    this.router.navigate(['']);
  }
  irContacto(){
    this.router.navigate(['contacto']);
  }

}
