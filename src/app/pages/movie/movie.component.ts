import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ResponseProcessService } from './services/respons-process.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor(
    public dataService: DataService,
    private responseProcessService: ResponseProcessService,
  ) {
    responseProcessService
      .saveAndProcessGenres()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
    responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
