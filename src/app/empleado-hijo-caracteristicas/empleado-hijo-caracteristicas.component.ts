import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo-caracteristicas',
  templateUrl: './empleado-hijo-caracteristicas.component.html',
  styleUrls: ['./empleado-hijo-caracteristicas.component.css']
})

export class EmpleadoHijoCaracteristicasComponent implements OnInit {

  @Output() caracteristicaHijoEvent = new EventEmitter<string>();

  addCaracteristicaHijo(value: any) {
    this.caracteristicaHijoEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
