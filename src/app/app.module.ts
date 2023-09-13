import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, SkillsComponent, EducationComponent, ProjectsComponent, FooterComponent, ScrollUpComponent],
  imports: [BrowserModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
