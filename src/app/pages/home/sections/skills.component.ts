import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Git',
    'RxJS',
    'Nginx',
    'Figma',
    'CI/CD',
    'Azure',
    'MySQL',
    'i18n',
    'Web Design',
    'HTML',
    'CSS',
    'SASS',
    'Tailwind CSS',
    'PrimeNG',
  ];
}
