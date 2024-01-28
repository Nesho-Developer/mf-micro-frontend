import { Component, computed, effect, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@nx/angular/mf';
import { UserDataService } from '@mf-micro-front/user-data';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'en-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('headerPlaceHolder', { read: ViewContainerRef })
  headerViewContainer!: ViewContainerRef;
  @ViewChild('footerPlaceHolder', { read: ViewContainerRef })
  footerViewContainer!: ViewContainerRef;

  userDateService = inject(UserDataService)
  router = inject(Router)
  constructor() {
    effect(() => {
      console.log('isLogged', this.isLogged);
      this.trackLoginFn()
    });
  }
  trackLoginFn() {
    const currentRoute = this.router.url;
    console.log('currentRoute', currentRoute)
    console.log('trackLoginFn')
    if (currentRoute.includes('login') && this.isLogged) {
       this.router.navigate(['/'])
    }
    if (!this.isLogged) {
      this.router.navigate(['/login'])
    }
  }
  ngOnInit(): void {
    this.loadRemotes();
  }
  get isLogged() {
    return this.userDateService.isLogged;
  }
  async loadRemotes(): Promise<void> {
    const mh = await loadRemoteModule('header', './Component');
    const mf = await loadRemoteModule('footer','./Component');
    this.headerViewContainer.clear()
    this.headerViewContainer.createComponent(mh.RemoteEntryComponent);
    this.footerViewContainer.createComponent(mf.RemoteEntryComponent);
  }

}
