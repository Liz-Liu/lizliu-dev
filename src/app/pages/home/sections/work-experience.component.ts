import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, JobCardComponent, TranslateModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  jobs = [
    { key: 'JOB1', imageUrl: '/assets/logo_Cathay_United_Bank.png' },
    { key: 'JOB2', imageUrl: '/assets/logo_EVGA.png' }
  ];
}
