// Knuvi-Brand-Vorgaben für alle gerenderten Videos.
// Farbwerte sind Startwerte in Knuvi-Tonalität (warm, gemütlich, beruhigend) –
// sobald Melanie die offiziellen Brand-Farben liefert, hier ersetzen.

export const brand = {
  // [PLATZHALTER: offizielle Knuvi-Markenfarben – aktuelle Werte sind cozy Startwerte]
  colors: {
    background: '#FDF6EE', // warmes Creme
    backgroundAlt: '#F3E5D8', // sanftes Beige
    text: '#4A3F35', // warmes Dunkelbraun
    accent: '#E8A87C', // sanftes Terrakotta
    soft: '#B5C9C3', // beruhigendes Salbeigrün
  },
  font: {
    // System-Fallback-Stack; [PLATZHALTER: offizielle Brand-Font, falls vorhanden]
    family:
      "'Quicksand', 'Nunito', 'Comfortaa', -apple-system, 'Segoe UI', sans-serif",
    weightHeadline: 700,
    weightBody: 500,
  },
  // Feste Markenfakten (belegt, siehe CLAUDE.md „Markenfakten Knuvi")
  claims: {
    slogan: 'Gönn dir eine Umarmung, die bleibt.',
    shop: 'Knuvi.de',
    garantie: '30 Tage Geld-zurück-Garantie',
  },
  format: {
    width: 1080,
    height: 1920,
    fps: 30,
  },
} as const;
