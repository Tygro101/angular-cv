import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailedComponentComponent } from './detailed-component/detailed-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailedComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
