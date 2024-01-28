import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'roles',
  exposes: {
    './Routes': 'apps/roles/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
