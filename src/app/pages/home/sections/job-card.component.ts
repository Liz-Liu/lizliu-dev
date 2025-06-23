import { Component, Input, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() company!: string;
  @Input() tagline!: string;
  @Input() role!: string;
  @Input() date!: string;
  @Input() details!: string[];
  @Input() imageUrl!: string;

  isOpen = signal(false);
  screenWidth = signal(window.innerWidth);
  isSmallScreen!: Signal<boolean>;

  skillKeywords = [
    'React', 'TypeScript', 'Redux', 'Next.js', 'Recharts', 'Cypress',
    'Webpack', 'RESTful API', 'Nginx', 'SaaS', 'react-i18next'
  ];

  ngOnInit(): void {
    this.isSmallScreen = computed(() => this.screenWidth() < 768);

    // 初始化正確設置
    this.screenWidth.set(window.innerWidth);

    // 註冊 resize listener
    window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });
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
