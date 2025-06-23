import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent {
  constructor(public themeService: ThemeService) {}

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
