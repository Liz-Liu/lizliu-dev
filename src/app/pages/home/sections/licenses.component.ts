import { Component, Input, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-licenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './licenses.component.html',
  styleUrl: './licenses.component.scss'
})
export class LicensesComponent {

    licenses = [
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      organization: 'Microsoft',
      date: 'Jun 2025',
      url:'https://learn.microsoft.com/api/credentials/share/en-us/LiuLiz-4302/420FD62DDB19D5B4?sharingId'
    }
  ];


}
