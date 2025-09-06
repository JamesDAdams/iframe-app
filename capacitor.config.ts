import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jamesadams.jamesserver',
  appName: 'JamesServer',
  webDir: 'dist',
  server: {
    // Remplacez par l’URL de votre site (https recommandé)
    url: 'https://jamesserver.fr',
    cleartext: false,
    allowNavigation: ['jamesserver.fr', 'www.jamesserver.fr']
  }
  // Note: Commentez le bloc "server" ci-dessus si vous voulez embarquer le build local.
};

export default config;
