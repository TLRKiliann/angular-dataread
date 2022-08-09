import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryDocComponent } from './primary-doc/primary-doc.component';
import { SecondaryDocComponent } from './secondary-doc/secondary-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryDocComponent,
    SecondaryDocComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
