import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      href: 'https://murmur-ecru.vercel.app/',
      imgSrc: '/Murmur.png',
      title: 'murmur',
      subtitle: 'a white noise app',
      description:
        'A calming web app that lets you mix ambient sounds to create your perfect soundscape — whether you\'re trying to relax, focus, or drift off to sleep.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Lucide Icons']
    },
    {
      href: 'https://dive-deep-into-z-index.vercel.app',
      imgSrc: '/zindex.png',
      title: 'Dive Deep into Z-Index',
      subtitle: 'an interactive CSS demo',
      description:
        'An educational demo that visually explains how CSS z-index works through layered examples, perfect for beginners and visual learners.',
      tech: ['HTML', 'CSS']
    }
  ];
}
