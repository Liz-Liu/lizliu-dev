import { Component, Input, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TranslateUtilsService } from '../../../core/services/translate-utils.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() key!: string;

  isOpen = signal(false);
  screenWidth = signal(window.innerWidth);
  isSmallScreen!: Signal<boolean>;

  details$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private sub!: Subscription;

  skillKeywords = [
    'React', 'TypeScript', 'Redux', 'Next.js', 'Recharts', 'Cypress',
    'Webpack', 'RESTful API', 'Nginx', 'SaaS', 'react-i18next'
  ];

  constructor(private translateUtils: TranslateUtilsService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.isSmallScreen = computed(() => this.screenWidth() < 768);

    // 初始化正確設置
    this.screenWidth.set(window.innerWidth);

    // 註冊 resize listener
    window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });

    const detailsKey = `WORK_EXPERIENCE.${this.key}.DETAILS`;
    this.details$ = this.translateUtils.getReactiveTranslatedArray(detailsKey);
  }

   ngOnDestroy(): void {
    this.details$.complete();
  }

  getAltText(): string {
  const company = this.translate.instant(`WORK_EXPERIENCE.${this.key}.COMPANY`);
  return `${company} logo`;
}

  toggle(event?: Event) {
    if (event) {
      event.stopPropagation(); // 防止按鈕點擊冒泡
    }
    this.isOpen.set(!this.isOpen());
  }

  highlightSkills(text: string): { text: string; highlight: boolean }[] {
    const parts = text.split(new RegExp(`(${this.skillKeywords.join('|')})`, 'gi'));
    return parts.map(part => ({
      text: part,
      highlight: this.skillKeywords.includes(part)
    }));
  }
}
