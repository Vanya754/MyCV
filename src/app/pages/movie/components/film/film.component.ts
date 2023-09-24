import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/pages/movie/services/data.service';
import { Movie } from 'src/app/pages/movie/shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  @Input() data!: Movie;
  genres!: string;

  constructor(public readonly dataService: DataService) {}

  ngOnInit(): void {
    this.genres = this.dataService.convertIdsToGenres(this.data.genreIds);
  }

  openPopup() {
    this.dataService.selectedMovie = this.data;
    this.dataService.popup = true;
    console.log(this.dataService.popup);
  }
}
