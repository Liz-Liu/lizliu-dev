import { Component, signal } from '@angular/core';
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

  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.set(!this.isOpen());
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
