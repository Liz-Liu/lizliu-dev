import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './sections/about.component';
import { WorkExperienceComponent } from './sections/work-experience.component';
import { SkillsComponent } from './sections/skills.component';
import { ProjectsComponent } from './sections/projects.component';
import { ContributionsComponent } from './sections/contributions.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ CommonModule,
  AboutComponent,
  WorkExperienceComponent,
  SkillsComponent,
  ProjectsComponent,
  ContributionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
