import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './app/core/services/language.service'; // ✅ 路徑請依實際調整

// 👇 建立多語系 loader（抓 public/assets/i18n/ 下的 .json 檔）
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// ✅ 加入 APP_INITIALIZER 工廠函式
export function initLangFactory(langService: LanguageService) {
  return () => langService.initLanguage(); // 回傳一個 Promise
}

// 👇 bootstrap 應用程式
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initLangFactory,
      deps: [LanguageService],
      multi: true,
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'zh',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
});
