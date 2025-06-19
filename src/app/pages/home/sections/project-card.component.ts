import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() href!: string;
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() tech!: string[];
}
