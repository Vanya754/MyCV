import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CvComponent } from './pages/cv/cv.component';
import { WatchesComponent } from './pages/watch/watch.component';
// import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'watches', component: WatchesComponent },
  // { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
