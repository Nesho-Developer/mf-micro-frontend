import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'roles',
    loadChildren: () =>
      loadRemoteModule('roles', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule('users', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule('home', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
