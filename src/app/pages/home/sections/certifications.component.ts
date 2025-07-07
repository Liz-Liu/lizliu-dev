import {
  Component,
  Input,
  OnInit,
  Signal,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class certificationsComponent {

  constructor(private translate: TranslateService) {}

  certifications = [
    {
      key: 'ITEM1',
      imageUrl: 'assets/certification_Associate.svg',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/LiuLiz-4302/420FD62DDB19D5B4?sharingId',
    },
    {
      key: 'ITEM2',
      imageUrl: 'assets/certification_Associate.svg',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/LiuLiz-4302/7057739F8EFD6E?sharingId',
    },
  ];

}
