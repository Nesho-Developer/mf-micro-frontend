import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserDataService } from '@mf-micro-front/user-data';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterLink],
  selector: 'mf-micro-front-header-entry',
  template: `
    <div class="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" routerLink="/">
            <img src="./assets/images/logo.ico" alt="Bootstrap" width="30" height="24">
            Eastnets PS
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" routerLink="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/dashboard">Dashboard</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Security</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/users">Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/roles">Roles</a>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
              @if (isLogged) {
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="profile-pic">
                      <img src="./assets/images/avatar.jpg" alt="Profile Picture">
                    </div>
                    <!-- You can also use icon as follows: -->
                    <!--  <i class="fas fa-user"></i> -->
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><span>Logged as: {{ user?.name }}</span></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-sliders-h fa-fw"></i> Account</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-cog fa-fw"></i> Settings</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" (click)="onLogout()"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                    </li>
                  </ul>
                </li>
              } @else {
                <li class="nav-item">
                  <a class="btn btn-danger" routerLink="/login">Login</a>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>

    </div>`,
  styles: `
    /* Profile Picture */
    .profile-pic{
      display: inline-block;
      vertical-align: middle;
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50%;
    }

    .profile-pic img{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .profile-menu .dropdown-menu {
      right: 0;
      left: unset;
    }
    .profile-menu .fa-fw {
      margin-right: 10px;
    }

    .toggle-change::after {
      border-top: 0;
      border-bottom: 0.3em solid;
    }`
})
export class RemoteEntryComponent {
  private userDateService = inject(UserDataService)

  get isLogged() {
    return this.userDateService.isLogged;
  }
  get user() {
    return this.userDateService.user;
  }

  onLogout() {
    this.userDateService.logout();
  }
}
