import { Injectable, signal, computed } from '@angular/core';
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
  private _auth = signal<AuthResponse | null>(null);
  readonly auth = computed(() => this._auth());

  login(credentials: { username: string; password: string }): Promise<AuthResponse> {
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
