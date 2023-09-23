import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from 'src/app/pages/watch/service/data.service';

@Component({
  selector: 'app-digital-watch',
  templateUrl: './digital-watch.component.html',
  styleUrls: ['./digital-watch.component.scss'],
})
export class DigitalWatchComponent implements OnInit, OnDestroy {
  constructor(public readonly dateService: DateService) {}
  ngOnInit(): void {
    this.dateService.startClock();
  }

  ngOnDestroy(): void {
    this.dateService.stopClock();
  }
}
