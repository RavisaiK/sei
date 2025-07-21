import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<boolean>(false);
  readonly theme = computed(() => this._theme());
  
  private readonly darkClass = 'dark';

  setDarkTheme(): void {
    document.documentElement.classList.add(this.darkClass);
  }

  setLightTheme(): void {
    document.documentElement.classList.remove(this.darkClass);
  }

  isDarkTheme(): boolean {
    const isDark = document.documentElement.classList.contains(this.darkClass);
    return isDark;
  }

  setTheme(): void {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
    this._theme.set(!this._theme());
  }
}
