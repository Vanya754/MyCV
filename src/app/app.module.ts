import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
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
import { FilmComponent } from './pages/movie/components/film/film.component';
import { MovieHeaderComponent } from './pages/movie/components/movie-header/movie-header.component';
import { PaginatorComponent } from './pages/movie/components/paginator/paginator.component';
import { PopupComponent } from './pages/movie/components/popup/popup.component';
import { MovieComponent } from './pages/movie/movie.component';
import { GameBoardComponent } from './pages/snake/components/game-board/game-board.component';
import { SnakeComponent } from './pages/snake/snake.component';
import { HeaderTodoComponent } from './pages/todo-list/components/header/headerTodo.component';
import { LoginComponent } from './pages/todo-list/pages/login/login.component';
import { MainComponent } from './pages/todo-list/pages/main/main.component';
import { AuthService } from './pages/todo-list/services/auth.service';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
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
    SnakeComponent,
    GameBoardComponent,
    MovieComponent,
    PopupComponent,
    PaginatorComponent,
    MovieHeaderComponent,
    FilmComponent,
    TodoListComponent,
    LoginComponent,
    MainComponent,
    HeaderTodoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    PaginatorModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    TagModule,
    ConfirmDialogModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    TagModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RippleModule,
    InputTextModule,
    HttpClientModule,
  ],
  providers: [AuthService, HttpClient, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
