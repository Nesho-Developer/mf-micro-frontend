import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '@mf-micro-front/user-data';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'mf-micro-front-login-entry',
  template: `
    <div class="row">
      <div class="col-md-6">
        <img src="./assets/images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
      </div>
      <div class="col-md-6 contents">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="mb-4">
              <h3>Sign In</h3>
              <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            </div>
            <form (ngSubmit)="onLogin()" method="post">
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" name="username" [(ngModel)]="user.username"
                       minlength="5" maxlength="10" class="form-control" id="username">

              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" [(ngModel)]="user.password"
                       minlength="5" maxlength="10" class="form-control" id="password">

              </div>

              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary">
            </form>
          </div>
        </div>

      </div>

    </div>
  `,
})
export class RemoteEntryComponent {
  user = { username: '', password: '' };
  userService = inject(UserDataService);
  onLogin() {
    console.log('Login', this.user);
    this.userService.login(this.user.username, this.user.password);
  }
}
