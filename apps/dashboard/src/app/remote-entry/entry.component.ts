import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mf-micro-front-dashboard-entry',
  template: `<mf-micro-front-nx-welcome></mf-micro-front-nx-welcome>`,
})
export class RemoteEntryComponent {}
