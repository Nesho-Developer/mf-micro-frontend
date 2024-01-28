import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'footer',
  exposes: {
    './Component': 'apps/footer/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
