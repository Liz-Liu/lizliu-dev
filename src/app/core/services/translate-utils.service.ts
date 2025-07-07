import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateUtilsService implements OnDestroy {
  private langChangeSubs: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  /**
   * 取得一個翻譯陣列，並在語言切換時自動更新
   * @param key i18n 路徑，例如 'WORK_EXPERIENCE.JOB1.DETAILS'
   * @returns BehaviorSubject<string[]>
   */
  getReactiveTranslatedArray(key: string): BehaviorSubject<string[]> {
    const subject = new BehaviorSubject<string[]>([]);
    const load = () => {
      this.translate.get(key).subscribe((res) => {
        const array = Array.isArray(res) ? res : Object.values(res);
        subject.next(array);
      });
    };

    load(); // 初始載入

    const sub = this.translate.onLangChange.subscribe(() => load());
    this.langChangeSubs.push(sub);

    return subject;
  }

  ngOnDestroy(): void {
    this.langChangeSubs.forEach((sub) => sub.unsubscribe());
  }
}
