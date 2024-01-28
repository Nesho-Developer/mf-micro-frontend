import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'header',
  exposes: {
    // './Routes': 'apps/header/src/app/remote-entry/entry.routes.ts',
    './Component': 'apps/header/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
