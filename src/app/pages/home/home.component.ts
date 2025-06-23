import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './sections/about.component';
import { WorkExperienceComponent } from './sections/work-experience.component';
import { SkillsComponent } from './sections/skills.component';
import { ProjectsComponent } from './sections/projects.component';
import { HeroComponent } from './sections/hero.component';
import { IconBarComponent } from "./sections/icon-bar.component";
import { LicensesComponent } from "./sections/licenses.component";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    AboutComponent,
    WorkExperienceComponent,
    SkillsComponent,
    HeroComponent,
    IconBarComponent,
    LicensesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
