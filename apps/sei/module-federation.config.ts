import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  '@angular/core',
  '@angular/common',
  '@sei/shared',
]);

const config: ModuleFederationConfig = {
  name: 'sei',
  remotes: [
    ['dashboard', 'http://localhost:4201/remoteEntry.js'],
    ['users', 'http://localhost:4202/remoteEntry.js'],
  ],
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
