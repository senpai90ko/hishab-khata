import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.affan.hishabkhata',
  appName: 'Hishab Khata',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false,
  },
};

export default config;
