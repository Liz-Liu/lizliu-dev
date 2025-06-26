import { inject, Component, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent {
  public themeService = inject(ThemeService);
  public langService = inject(LanguageService);

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  isOpen = signal(false);
  toggleMenu = () => this.isOpen.set(!this.isOpen());
  closeMenu = () => this.isOpen.set(false);

  langs = [
    { code: 'zh', label: '繁體中文' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  currentLang = this.langService.getCurrentLang();

  selectLang(lang: string): void {
    this.langService.switchLang(lang);
    this.currentLang = lang;
    this.isOpen.set(false);
  }
}
