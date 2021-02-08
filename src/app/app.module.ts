import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousselComponent
  ],
  imports: [
    MatSliderModule,
    MatCardModule,
    BrowserModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
