import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.css'],
})
export class ScrollUpComponent {
  showScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScroll = window.scrollY >= 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
