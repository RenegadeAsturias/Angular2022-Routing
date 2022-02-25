import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})

export class ActualizaEmpleadoComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicioEmpleados:EmpleadosService) { }

  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.miServicioEmpleados.empleados;
    
    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.miServicioEmpleados.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  empleados:Empleado[]=[];

  accion:number;

  accionEmpleado(){
    if(this.accion==1) { // Actualizar
      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.miServicioEmpleados.actualizarEmpleadoServicio(this.indice, miEmpleado);
      this.router.navigate(['']); // Redireccionamiento automático para ir al Home después de agregar un Empleado

    } else { // Eliminar
      this.miServicioEmpleados.eliminarEmpleadoServicio(this.indice,);
      this.router.navigate(['']); // Redireccionamiento automático para ir al Home después de agregar un Empleado
    }
  }

  /**
  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicioEmpleados.actualizarEmpleadoServicio(this.indice, miEmpleado);

    this.router.navigate(['']); // Redireccionamiento automático para ir al Home después de agregar un Empleado
  }

  eliminaEmpleado(){
    this.miServicioEmpleados.eliminarEmpleadoServicio(this.indice,);
    this.router.navigate(['']); // Redireccionamiento automático para ir al Home después de agregar un Empleado
  }
  */

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;

  irHome(){
    this.router.navigate(['']);
  }
  irContacto(){
    this.router.navigate(['contacto']);
  }

}
