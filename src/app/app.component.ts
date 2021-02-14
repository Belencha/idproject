import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Example-app';
  quien = 'yo';

  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
