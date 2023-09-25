import { Component, HostListener } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  activeSectionId: string | null = null;

  constructor(private sharedDataService: SharedDataService) {
    this.sharedDataService.activeSectionId$.subscribe((sectionId) => {
      this.activeSectionId = sectionId;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollDown = window.scrollY;
    const sectionElements = document.querySelectorAll('section[id]');

    sectionElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 58;
        const sectionId = element.getAttribute('id');

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          this.sharedDataService.setActiveSectionId(sectionId);
        }
      }
    });
  }
}
