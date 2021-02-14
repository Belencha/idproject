import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.sass']
})
export class InterruptorComponent implements OnInit {

  activo = true;

  constructor() { }

  ngOnInit() {
  }

  intercambiar() {
    this.activo = !this.activo;
  }

}
