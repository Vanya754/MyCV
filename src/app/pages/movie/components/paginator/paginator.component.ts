import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { DataService } from 'src/app/pages/movie/services/data.service';
import { FiltersService } from 'src/app/pages/movie/services/filter.service';
import { ResponseProcessService } from 'src/app/pages/movie/services/respons-process.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  constructor(
    public dataService: DataService,
    public filtersService: FiltersService,
    private responseProcessService: ResponseProcessService,
  ) {}

  onPageChange(event: PaginatorState) {
    this.filtersService.page = (event.first as number) + 1;
    this.responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
