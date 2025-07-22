import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  '@angular/core',
  '@angular/common',
  '@sei/shared',
]);

const config: ModuleFederationConfig = {
  name: 'users',
  exposes: {
    './Routes': 'apps/users/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      };
    }
    return false;
  },
};

export default config;
