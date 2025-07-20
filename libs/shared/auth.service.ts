import { Injectable, signal, computed } from '@angular/core';
import axios from 'axios';

export interface AuthResponse {
  accessToken: string;
  username: string;
  email: string;
  image: string;
  gender: string;
  isAdmin?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _auth = signal<AuthResponse | null>(null);
  readonly auth = computed(() => this._auth());

  login(credentials: { username: string; password: string }): Promise<AuthResponse> {
    if (credentials.username === 'bronco' && credentials.password === 'broncopass') {
      const mockResponse: AuthResponse = {
        accessToken: 'mockAccessToken',
        username: 'bronco',
        email: 'bronco@brand.com',
        image: 'https://dummyjson.com/icon/jack/128',
        gender: 'male',
        isAdmin: true
      }
      this._auth.set(mockResponse);
      return Promise.resolve(mockResponse);
    }
    return axios.post<AuthResponse>('https://dummyjson.com/auth/login', credentials)
      .then(response => {
        this._auth.set(response.data);
        return response.data;
      });
  }

  logout(): void {
    this._auth.set(null);
  }
}
