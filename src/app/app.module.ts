import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { FormsModule } from '@angular/forms';
import { DoubleBindingExampleComponent } from './components/double-binding-example/double-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DoubleBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
