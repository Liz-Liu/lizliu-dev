import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = false;

  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const html = document.documentElement;
    if (this.darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
