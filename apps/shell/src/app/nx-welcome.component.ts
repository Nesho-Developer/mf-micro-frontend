import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@mf-micro-front/ui';
import { UserDataService } from '@mf-micro-front/user-data';

@Component({
  selector: 'en-nx-welcome',
  standalone: true,
  imports: [CommonModule, UiComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Welcome <b class="text-info-emphasis">{{name}}</b> to Eastnets</h1>
        <p class="lead">
          This is a demo of how to use En Nx to build a micro frontend
          application.
        </p>
        <en-ui/>
        <p>
          <a
            class="btn btn-lg btn-primary"
            href="#"
            role="button"
            routerLink="/form">
            Learn more
          </a>
        </p>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  userService = inject(UserDataService);

  get name() {
    return this.userService.user?.name
  }
}
