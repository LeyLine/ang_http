// Default CLI Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Imports part of the lesson
import { HttpModule } from '@angular/http';
import { JokesComponent } from './jokes/jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
