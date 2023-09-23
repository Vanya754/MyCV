import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from 'src/app/pages/watch/service/data.service';

@Component({
  selector: 'app-analog-watch',
  templateUrl: './analog-watch.component.html',
  styleUrls: ['./analog-watch.component.scss'],
})
export class AnalogWatchComponent implements OnInit, OnDestroy {
  constructor(public readonly dateService: DateService) {}

  ngOnInit() {
    this.dateService.startClock();
  }

  ngOnDestroy(): void {
    this.dateService.startClock();
  }

  protected readonly DateService = DateService;
}
