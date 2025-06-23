import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal(false);

  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.darkMode.set(true);
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    const newState = !this.darkMode();
    this.darkMode.set(newState);
    const html = document.documentElement;
    if (newState) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', newState ? 'dark' : 'light');
  }
}
