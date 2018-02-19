import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    ChicagoComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
