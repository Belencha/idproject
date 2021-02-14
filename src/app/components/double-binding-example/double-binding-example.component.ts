import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-binding-example',
  templateUrl: './double-binding-example.component.html',
  styleUrls: ['./double-binding-example.component.sass']
})
export class DoubleBindingExampleComponent implements OnInit {

  quien = 'yo';


  constructor() { }

  ngOnInit() {
  }

}
