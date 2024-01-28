import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
router = inject(Router);
private _isLogged = signal(false);
private _user = signal<User| undefined>(undefined);

constructor() {
  const user = localStorage.getItem('user');
  if (user) {
    this._user.set(JSON.parse(user));
    this._isLogged.set(true);
  }
}
get isLogged() {
  return this._isLogged();
}
get user() {
  return this._user();
}
// eslint-disable-next-line
login(username: string, password: string) {
  this._isLogged.set(true);
  this._user.set({
    name: username,
    email: `${username}@gmail.com`,
    role: 'admin'
  });
  localStorage.setItem('user', JSON.stringify(this._user()));
  this.router.navigate(['/']);
}
logout() {
  this._isLogged.set(false);
}
}
