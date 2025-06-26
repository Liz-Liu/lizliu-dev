import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private supportedLangs = ['en', 'zh', 'fr'];

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage(): void {
    const savedLang = localStorage.getItem('lang');

    if (savedLang && this.supportedLangs.includes(savedLang)) {
      this.translate.use(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0]; // e.g. "en-US" → "en"
      const matchedLang = this.supportedLangs.includes(browserLang) ? browserLang : 'en';
      this.translate.use(matchedLang);
      localStorage.setItem('lang', matchedLang);
    }

    this.translate.setDefaultLang('en'); // fallback 語言
  }

  switchLang(lang: string): void {
    if (this.supportedLangs.includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
