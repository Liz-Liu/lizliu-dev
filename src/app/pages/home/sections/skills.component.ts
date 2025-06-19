import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    'React',
    'TypeScript',
    'Node.js',
    'JavaScript',
    'Git',
    'React Query',
    'Tailwind CSS',
    'Redux',
    'Next.js',
    'Recharts',
    'Cypress',
    'Webpack',
    'Nginx',
    'SaaS',
    'react-i18next',
    'Web crawlers',
    'Puppeteer',
    'RESTful APIs',
    'Cross-Browser Development',
    'Figma'
  ];
}
