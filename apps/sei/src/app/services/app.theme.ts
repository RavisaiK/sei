  // app-theme.service.ts
  import { Injectable, signal } from '@angular/core';

  export enum AppTheme {
    LIGHT = 'light',
    DARK = 'dark',
  }

  @Injectable({
    providedIn: 'root',
  })
  export class AppThemeService {
    private readonly LS_THEME = 'theme';
    private _currentTheme = signal<AppTheme | undefined>(undefined);

    constructor() {
      this.initializeTheme();
    }

    private initializeTheme(): void {
      if (typeof localStorage !== 'undefined') {
        const storedTheme = localStorage.getItem(this.LS_THEME) as AppTheme;
        if (storedTheme) {
          this.setTheme(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.setTheme(AppTheme.DARK);
        } else {
          this.setTheme(AppTheme.LIGHT);
        }
      }
    }

    setTheme(theme: AppTheme): void {
      this._currentTheme.set(theme);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.LS_THEME, theme);
      }
      document.documentElement.classList.toggle('dark', theme === AppTheme.DARK);
    }

    toggleTheme(): void {
      const newTheme = this._currentTheme() === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
      this.setTheme(newTheme);
    }

    getCurrentTheme(): AppTheme | undefined {
      return this._currentTheme();
    }
  }
