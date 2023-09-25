import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CvComponent } from './pages/cv/cv.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SnakeComponent } from './pages/snake/snake.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { WatchesComponent } from './pages/watch/watch.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'todo', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
