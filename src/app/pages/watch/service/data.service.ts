import { Injectable } from '@angular/core';
import { Watches } from 'src/app/pages/watch/shared/interface';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private _currentTime: Watches = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  private interval!: ReturnType<typeof setInterval>;

  get currentTime(): Watches {
    return this._currentTime;
  }

  private get getTime(): Watches {
    const currentDate = new Date();
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  }

  public startClock() {
    this.interval = setInterval(() => (this._currentTime = this.getTime), 1000);
  }

  public stopClock() {
    clearInterval(this.interval);
  }
}
