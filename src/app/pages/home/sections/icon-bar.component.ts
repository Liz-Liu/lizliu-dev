import {
  inject,
  Component,
  signal,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss'],
})
export class IconBarComponent {
  isOpen = signal(false);
  langs = [
    { code: 'zh', label: '繁體中文' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];
  currentLang: string;

  constructor(
    public themeService: ThemeService,
    private langService: LanguageService,
    private eRef: ElementRef
  ) {
    this.currentLang = this.langService.getCurrentLang();
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  toggleMenu = () => this.isOpen.set(!this.isOpen());
  closeMenu = () => this.isOpen.set(false);

  selectLang(lang: string): void {
    this.langService.switchLang(lang);
    this.currentLang = lang;
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
