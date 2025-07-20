import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';

interface AuthResponse {
  accessToken: string;
  username: string;
  email: string;
  image: string;
  gender: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authState = new BehaviorSubject<AuthResponse | null>(this.getStoredAuth());

  get auth$(): Observable<AuthResponse | null> {
    return this.authState.asObservable();
  }

  private getStoredAuth(): AuthResponse | null {
    const authData = localStorage.getItem('auth');
    if (authData) {
      return JSON.parse(authData) as AuthResponse;
    }
    return null;
  }

  login(credentials: { username: string; password: string }): Promise<AuthResponse> {
    return axios.post<AuthResponse>('https://dummyjson.com/auth/login', credentials)
      .then(response => {
        localStorage.setItem('auth', JSON.stringify(response.data));
        this.authState.next(response.data);
        return response.data;
      });
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.authState.next(null);
  }
}
