# Knuvi Video-Rendering (Remotion)

> Dieses Verzeichnis rendert aus Skript-JSONs automatisch gebrandete 9:16-Videos (Text-Motion-Ads) für Knuvi. Genutzt vom `knuvi-creative-agent` und für Ad-Varianten.

## Was das kann – und was nicht

- ✅ **Kann:** Text-basierte Motion-Ads (animierte Szenen-Panels, Overlays, Brand-Abbinder) automatisch aus einem Skript rendern – ideal für schnelle Hook-Tests, Statics-Ersatz und Text-Varianten bestehender Winner.
- ❌ **Kann nicht:** UGC-Videos mit echten Menschen ersetzen. Gedrehtes Creator-Material bleibt der Kern der Ad-Strategie (siehe `plan/`); Remotion ergänzt.

## Nutzung

```bash
cd libs/remotion
npm install            # einmalig pro Umgebung (node_modules ist nicht committet)
npx remotion render KnuviAd out/mein-video.mp4 --props=skripte/mein-skript.json
```

Skript-Format (`skripte/beispiel-skript.json` als Vorlage): `szenen` (je `dauerSekunden`, `text`, optional `overlay`), `cta`, `zeigeSlogan`. Der Abbinder (3 Sek.) mit Slogan + Knuvi.de wird automatisch angehängt.

## Brand-Vorgaben

Farben, Font und feste Markenfakten liegen zentral in `src/brand.ts` – Änderungen dort wirken auf alle Videos. Die aktuellen Farbwerte sind cozy Startwerte mit `[PLATZHALTER]`-Vermerk, bis Melanie die offiziellen Brand-Farben liefert.

## Technik-Notizen (für diese Cloud-Umgebung)

- Browser: nutzt die vorinstallierte `chromium_headless_shell` (in `remotion.config.ts` gesetzt) – **keinen** eigenen Browser herunterladen.
- `node_modules/` und `out/` sind bewusst nicht im Git (siehe `.gitignore`); Videos werden bei Bedarf frisch gerendert.
- Remotion-Lizenz: kostenlos für Einzelunternehmer:innen und Teams bis 3 Personen; ab 4 Personen Company-Lizenz nötig (remotion.pro). Für Melanie aktuell frei.

## Regeln (aus CLAUDE.md, gelten auch hier)

Keine erfundenen Zahlen/Claims in Videos; belegte Markenfakten stehen in `src/brand.ts` bzw. `CLAUDE.md`. Videos sind Entwürfe – veröffentlicht wird nur durch Melanie.
