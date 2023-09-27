import { Injectable } from '@angular/core';
import { FiltersService } from 'src/app/pages/movie/services/filter.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private filtersService: FiltersService) {}

  private get _trailerUrl(): string {
    return (
      this._baseUrl +
      'movie/' +
      this.filtersService.popupId +
      '/videos' +
      this.filtersService.staticParams
    );
  }

  private get _genresUrl() {
    return (
      this._baseUrl + 'genre/movie/list' + this.filtersService.staticParams
    );
  }

  private get _moviesUrl() {
    const movie = this.filtersService.title ? `search/movie` : `discover/movie`;
    return this._baseUrl + movie + this.filtersService.toQuery;
  }

  async loadTrailer(): Promise<any> {
    const response: Response = await fetch(this._trailerUrl);
    return await response.json();
  }

  async loadData() {
    const response = await fetch(this._moviesUrl);
    return await response.json();
  }

  async loadGenres() {
    const response = await fetch(this._genresUrl);
    return await response.json();
  }
}
