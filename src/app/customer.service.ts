import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  deleteToken(): void {
    localStorage.removeItem(TOKEN);
  }
  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
