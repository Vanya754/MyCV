import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private activeSectionIdSubject = new BehaviorSubject<string | null>(null);
  activeSectionId$ = this.activeSectionIdSubject.asObservable();

  setActiveSectionId(sectionId: string | null) {
    this.activeSectionIdSubject.next(sectionId);
  }
}
