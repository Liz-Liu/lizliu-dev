import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private supportedLangs = ['en', 'zh', 'fr'];


  constructor(private translate: TranslateService) {}

  /**
   * 初始化語言設定，會等待語言載入完成
   * @returns Promise<void>
   */
  initLanguage(): Promise<void> {
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language.split('-')[0]; // e.g., 'en-US' -> 'en'

    const selectedLang = this.supportedLangs.includes(savedLang || '')
      ? savedLang!
      : this.supportedLangs.includes(browserLang)
      ? browserLang
      : 'zh';

    this.translate.setDefaultLang('zh'); // fallback 預設語言

    // 用 Promise 確保語言載入完成才啟動 App
    return this.translate.use(selectedLang).toPromise().then(() => {
      localStorage.setItem('lang', selectedLang);
    });
  }

  /**
   * 切換語言，並存入 localStorage
   */
  switchLang(lang: string): void {
    if (this.supportedLangs.includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }
  }

  /**
   * 取得目前語言
   */
  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
