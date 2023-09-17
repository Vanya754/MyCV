import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent implements OnInit {
  darkTheme = 'dark-theme';
  selectedTheme: string | null = localStorage.getItem('selected-theme');
  selectedIcon: string | null = localStorage.getItem('selected-icon');
  iconClass: string = this.selectedIcon || 'ri-moon-line'; // Встановлюємо початковий клас іконки

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle(this.darkTheme);
    localStorage.setItem('selected-theme', this.selectedTheme);
    this.toggleIcon();
  }

  toggleIcon() {
    this.selectedIcon =
      this.selectedIcon === 'ri-moon-line' ? 'ri-sun-line' : 'ri-moon-line';
    localStorage.setItem('selected-icon', this.selectedIcon);
    this.iconClass = this.selectedIcon;
  }

  ngOnInit(): void {
    if (this.selectedTheme === 'dark')
      document.body.classList.add(this.darkTheme);
    else document.body.classList.remove(this.darkTheme);
  }
}
