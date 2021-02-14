import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.sass']
})
export class MyFirstComponentComponent implements OnInit {

  valor = 'valor del input';

  constructor() { }

  ngOnInit() {
  }

  cambiaLado(nuevoValor) {
    this.valor = nuevoValor;
  }

}
