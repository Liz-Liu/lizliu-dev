import { Component, Input, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class certificationsComponent {

    certifications = [
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      organization: 'Microsoft',
      date: 'Jun 2025',
      url:'https://learn.microsoft.com/api/credentials/share/en-us/LiuLiz-4302/420FD62DDB19D5B4?sharingId'
    }
  ];


}
