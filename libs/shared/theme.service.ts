import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<boolean>(false);
  readonly theme = computed(() => this._theme());

  setTheme(): void {
    this._theme.set(!this._theme());
  }
}
