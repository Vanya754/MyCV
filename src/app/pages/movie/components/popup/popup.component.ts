import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/pages/movie/services/data.service';
import { FiltersService } from '../../services/filter.service';
import { ResponseProcessService } from '../../services/respons-process.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  movie = this.dataService.selectedMovie;
  genres = this.dataService.convertIdsToGenres(this.movie.genreIds);
  trailerUrl!: SafeResourceUrl;

  constructor(
    public readonly dataService: DataService,
    public readonly filterService: FiltersService,
    public readonly responseService: ResponseProcessService,
    private sanitizer: DomSanitizer,
  ) {}

  async ngOnInit(): Promise<void> {
    this.filterService.popupId = this.movie.id;

    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      await this.responseService.responseTrailer(),
    );
  }
}
