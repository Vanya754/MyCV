import { Component } from '@angular/core';
import { DataService } from 'src/app/pages/movie/services/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  visible: boolean = this.dataService.popup;
  movie = this.dataService.selectedMovie;
  genres = this.dataService.convertIdsToGenres(this.movie.genreIds);

  constructor(public readonly dataService: DataService) {}

  showDialog() {
    this.visible = true;
  }
}
