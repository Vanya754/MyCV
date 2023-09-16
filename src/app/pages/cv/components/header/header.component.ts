import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sections: ElementRef[] = [];
  activeSectionId: string | null = null;
  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('education') educationSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollDown = window.scrollY;
    const sectionElements = [
      this.homeSection,
      this.aboutSection,
      this.skillsSection,
      this.educationSection,
      this.projectsSection,
    ];

    sectionElements.forEach((section) => {
      const sectionHeight = section.nativeElement.offsetHeight;
      const sectionTop = section.nativeElement.offsetTop - 58;
      const sectionId = section.nativeElement.getAttribute('id');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        this.activeSectionId = sectionId;
      }
    });
  }
}
