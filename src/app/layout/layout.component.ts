import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [CommonModule, TranslateModule, RouterOutlet],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }

  switchLang(lang: string): void {
    this.langService.switchLang(lang);
  }
}
