import { useEffect } from 'react';

export default function App() {
  // URL de votre site (priorité à VITE_SITE_URL si défini)
  const SITE_URL = 'https://jamesserver.fr';

  // Redirection plein écran (first-party) si on n'est pas déjà sur le même origin
  useEffect(() => {
    try {
      const target = new URL(SITE_URL);
      if (location.origin !== target.origin) {
        window.location.replace(SITE_URL);
      }
    } catch {
      // ignore invalid URL
    }
  }, [SITE_URL]);

  return (
    <div
      style={{
        height: '100dvh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, sans-serif'
      }}
    >
      {/* Fallback iframe si la redirection ne s'applique pas */}
      <iframe
        src={SITE_URL}
        title="webapp"
        style={{ height: '100dvh', width: '100vw', border: 'none' }}
        allow="fullscreen"
      />
    </div>
  );
}
