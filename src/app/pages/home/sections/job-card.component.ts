import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSkillsPipe } from '../../../shared/pipes/highlight-skills.pipe'; // 請依實際路徑調整

@Component({
  standalone: true,
  selector: 'app-job-card',
  imports: [CommonModule, HighlightSkillsPipe],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: {
    company: string;
    tagline: string;
    role: string;
    date: string;
    imageUrl: string;
    details: string[];
  };

  @Input() skillKeywords!: string[];

  isOpen = false;

  toggleDetails(): void {
    this.isOpen = !this.isOpen;
  }
}
