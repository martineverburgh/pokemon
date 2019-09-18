import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { RaadComponent } from './raad/raad.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RaadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
