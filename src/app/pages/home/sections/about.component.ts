import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  isVisible = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 600);
  }

}
