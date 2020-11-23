import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = true;

  get userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  constructor() { }

  login(): void {
    this._userIsAuthenticated = true;
  }

  logout(): void {
    this._userIsAuthenticated = false;
  }
}
