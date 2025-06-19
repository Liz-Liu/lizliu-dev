import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';

@Component({
  standalone: true,
  selector: 'app-work-experience',
  imports: [CommonModule, JobCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  jobs = [
    {
      company: 'Red Soldier Limited',
      tagline: 'Modern CMS Development',
      role: 'Software Engineer',
      date: 'Dec 2023 - Present',
      imageUrl: '/Red Soldier Limited Post.jpeg',
      details: [
        'Led the development of responsive and interactive Content Management Systems (CMS) using React and TypeScript, ensuring a seamless user experience across platforms.',
        'Collaborated with back-end developers to integrate front-end components with server-side logic, spearheading efforts to optimize application speed and scalability.',
        'Implemented and consumed RESTful APIs, overseeing the process to ensure high performance and adherence to best practices.'
      ]
    },
    {
      company: 'ONElab Technology Ltd',
      tagline: 'Sports Betting Platforms',
      role: 'Software Engineer',
      date: 'Jun 2023 - Dec 2023',
      imageUrl: '/onelab.png',
      details: [
        'Developed and maintained a high-traffic sports betting platform serving 100,000+ active users across Asia, using React to deliver responsive, user-friendly interfaces.',
        'Introduced micro front-end architecture with Webpack, resolving early-stage UX issues and improving scalability across multiple product modules.',
        'Built robust end-to-end tests with Cypress and TypeScript, achieving 90%+ test coverage and supporting reliable, high-quality software releases.'
      ]
    },
    {
      company: 'LnData, Inc',
      tagline: 'Data Monitoring',
      role: 'Front End Engineer',
      date: 'Apr 2022 – Jun 2023',
      imageUrl: '/LnData Logo.jpeg',
      details: [
        'Built and launched the LnCarbon ESG platform using React, Redux, Recharts, and Nginx, enabling real-time emissions tracking and faster client onboarding through flexible data integration and visualization.',
        'Built a scalable low-code SaaS data monitoring platform, empowering non-technical users to configure custom pipelines and alerts with minimal engineering support.',
        'Developed and maintained the company website using Next.js, React, and react-i18next, delivering a fast, SEO-friendly, multilingual experience aligned with global branding goals.'
      ]
    }
  ];

  skillKeywords = [
    'React',
    'TypeScript',
    'Redux',
    'Next.js',
    'Recharts',
    'Cypress',
    'Webpack',
    'RESTful API',
    'Nginx',
    'SaaS',
    'react-i18next'
  ];
}
