import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
