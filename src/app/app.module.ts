import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/cv/components/about/about.component';
import { EducationComponent } from './pages/cv/components/education/education.component';
import { FooterComponent } from './pages/cv/components/footer/footer.component';
import { HeaderComponent } from './pages/cv/components/header/header.component';
import { HomeComponent } from './pages/cv/components/home/home.component';
import { ProjectsComponent } from './pages/cv/components/projects/projects.component';
import { ScrollUpComponent } from './pages/cv/components/scroll-up/scroll-up.component';
import { SkillsComponent } from './pages/cv/components/skills/skills.component';
import { ThemeSwitcherComponent } from './pages/cv/components/theme-switcher/theme-switcher.component';
import { CvComponent } from './pages/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
    ScrollUpComponent,
    CvComponent,
    ThemeSwitcherComponent,
  ],
  imports: [BrowserModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
