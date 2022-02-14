import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-caracteristicas',
  templateUrl: './empleado-hijo-caracteristicas.component.html',
  styleUrls: ['./empleado-hijo-caracteristicas.component.css']
})

export class EmpleadoHijoCaracteristicasComponent implements OnInit {

  @Output() caracteristicaHijoEvent = new EventEmitter<string>();

  addCaracteristicaHijo(value: any) {
    this.miServicio.muestraMensaje("Característica añadida:"+value);
    this.caracteristicaHijoEvent.emit(value);
  }

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}
