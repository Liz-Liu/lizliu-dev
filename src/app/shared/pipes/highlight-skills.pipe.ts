import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightSkills',
  standalone: true
})
export class HighlightSkillsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, skillKeywords: string[]): SafeHtml {
    if (!text || !skillKeywords || skillKeywords.length === 0) {
      return text;
    }

    const regex = new RegExp(`(${skillKeywords.join('|')})`, 'gi');
    const replaced = text.replace(regex, (match) => {
      return `<strong class="font-medium text-gray-800 dark:text-gray-100">${match}</strong>`;
    });

    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }
}
