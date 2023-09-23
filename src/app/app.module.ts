import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ButtonActionComponent } from './pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/calculator/components/general-button/general-button.component';
import { EnumPipePipe } from './pages/calculator/shared/pipes/enum-pipe.pipe';
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
import { AnalogWatchComponent } from './pages/watch/components/analog-watch/analog-watch.component';
import { NumericComponent } from './pages/watch/components/digital-watch/components/numeric/numeric.component';
import { SeparatorComponent } from './pages/watch/components/digital-watch/components/separator/separator.component';
import { DigitalWatchComponent } from './pages/watch/components/digital-watch/digital-watch.component';
import { WatchesComponent } from './pages/watch/watch.component';

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
    WatchesComponent,
    AnalogWatchComponent,
    DigitalWatchComponent,
    SeparatorComponent,
    NumericComponent,
    CalculatorComponent,
    ButtonActionComponent,
    ButtonNumericComponent,
    ButtonOperationComponent,
    DisplayComponent,
    GeneralButtonComponent,
    EnumPipePipe,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
