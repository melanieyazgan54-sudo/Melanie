# CLAUDE.md – Arbeitsregeln für dieses Repository

> Diese Datei definiert, wie Claude Code in diesem E-Commerce-Marketing-Repository arbeitet: Konventionen, Pfade, No-Gos. Sie ist bewusst so explizit geschrieben, dass auch kleinere Modelle (Sonnet, Haiku) ohne Raten arbeiten können.

## Projektkontext

- **Inhaberin:** Melanie, E-Commerce (Shopify-Stores).
- **Marke:** Knuvi – Weighted Plushies (gewichtete Kuscheltiere). Tonalität: gemütlich, warm, beruhigend, per Du, leicht verspielt.
- **Kernaufgaben:** Ad Creatives, UGC-Skripte, Influencer-Outreach, CRO, organischer Social-Media-Content, Trend-Recherche, Schmerzpunkt-Analyse.

## Markenfakten Knuvi (Quelle: Melanies Winner-Skripte, `winnerskripte/Knuvi_Winner_Skripte.pdf`, Stand 2026-07-06)

Diese Fakten sind belegt und dürfen ohne Platzhalter verwendet werden – alles darüber hinaus bleibt Platzhalter-Pflicht:

- **Produkt:** Gewichteter Kuschelfreund mit gewichteten Armen, die sich beim Umarmen um einen legen („gehalten werden statt zugedeckt sein"). Wirkprinzip: Tiefendruck (Deep Pressure).
- **Varianten:** Panda, Faultier, Koala, Hund.
- **Shop:** Knuvi.de
- **Social Proof:** über 7.000 Kund:innen (Stand Juli 2026).
- **Angebot:** 30 Tage Geld-zurück-Garantie, kostenloser Versand.
- **Slogan:** „Gönn dir eine Umarmung, die bleibt."
- **Positionierung:** „das kuscheligste Gewichtstier 2026" (Kundenstimme aus den Winner-Skripten).
- **Vorsicht bei Wirkaussagen:** Formulierungen wie „senkt den Cortisolspiegel", „setzt Serotonin frei", „reduziert Angst" stammen aus Melanies bezahlten Winner-Ads. In neuen Ads nur nach ihrem Muster verwenden; in organischem Content stattdessen weiche Formulierungen („kann helfen, zur Ruhe zu kommen"). Im Zweifel Melanie fragen.
- **Fast kein Code-Projekt:** Dieses Repo enthält Marketing-Dokumente in Markdown. Einzige Code-Ausnahme: `libs/remotion/` (Video-Rendering-Tooling, siehe dortiges README) – dort gelten normale Code-Regeln (npm install nötig, `node_modules`/`out` nie committen). Die Vorlagen-Bibliothek `marketingskills/` ist externer Referenz-Content (nur lesen, nicht bearbeiten).

## Grundregeln (immer gültig)

1. **Sprache:** Alle Inhalte auf Deutsch, per Du. Fachbegriffe (Hook, CTA, CTR, ROAS, AOV) bleiben englisch.
2. **Templates sind Pflicht:** Neue Dokumente entstehen immer aus dem Template im `templates/`-Ordner des jeweiligen Bereichs. Kein Abschnitt des Templates wird weggelassen; unzutreffende Abschnitte bekommen den Eintrag „N/A" mit kurzer Begründung.
3. **Ein Dokument = eine Datei:** Ein Creative-Briefing, ein UGC-Skript, ein Audit → jeweils eine eigene Datei im dafür vorgesehenen Ordner. Niemals mehrere Deliverables in eine Datei packen.
4. **Namensschema:** `JJJJ-MM-TT-kurzbeschreibung.md`, alles klein, Bindestriche statt Leerzeichen, keine Umlaute im Dateinamen (ae/oe/ue/ss). Beispiel: `2026-07-13-sommer-sale-hook-test.md`.
5. **Kopfzeile:** Jede neue Datei beginnt mit einer H1-Überschrift und direkt darunter einem Satz, wofür die Datei da ist.
6. **Platzhalter kennzeichnen:** Fehlende Infos (Produktname, Preis, Link) niemals erfinden. Stattdessen `[PLATZHALTER: was fehlt]` einsetzen und am Ende der Antwort auflisten, was Melanie noch liefern muss.

## No-Gos

- ❌ Keine erfundenen Zahlen, Statistiken oder Testimonials. Wenn eine Kennzahl fehlt: Platzhalter.
- ❌ Keine Heilversprechen oder rechtlich riskante Werbeaussagen („heilt", „garantiert Abnehmen", „das Beste der Welt" ohne Beleg).
- ❌ Keine Ordner oder Dateien außerhalb der bestehenden Struktur anlegen, ohne vorher zu fragen.
- ❌ Keine Dateien löschen oder umbenennen, ohne vorher zu fragen.
- ❌ Tracker-Dateien (`outreach-tracker.md`, `ab-test-log.md`, `plan/kpi-log.md`) nie neu aufbauen – nur Zeilen ergänzen oder Status aktualisieren.
- ❌ Nichts direkt an Influencer/Kunden senden – dieses Repo erstellt nur Entwürfe.

## Pfade und Zuständigkeiten

| Aufgabe | Skill | Template | Ergebnis ablegen in |
|---|---|---|---|
| Ad Creative / Anzeige | `.claude/skills/ad-creative/` | `ad-creatives/templates/creative-briefing-template.md` | `ad-creatives/kampagnen/` |
| UGC-Skript | `.claude/skills/ugc-skript/` | `ugc-scripts/templates/ugc-skript-template.md` | `ugc-scripts/skripte/` |
| Influencer-Outreach | `.claude/skills/influencer-outreach/` | `influencer-outreach/templates/outreach-template.md` | Tracker aktualisieren: `influencer-outreach/outreach-tracker.md` |
| CRO-Audit / A/B-Test | `.claude/skills/cro-audit/` | `cro/templates/cro-audit-template.md` | `cro/audits/` + `cro/ab-test-log.md` |
| Organischer Social-Post | Agent: `.claude/agents/knuvi-creative-agent.md` | `social-media/templates/post-template.md` | `social-media/posts/` |
| Trend-Recherche (wöchentlich) | Agent: `.claude/agents/knuvi-trend-scout.md` | `research/templates/trend-report-template.md` | `research/trends/` |
| Schmerzpunkt-Analyse (14-tägig) | Agent: `.claude/agents/knuvi-psychologie-analyst.md` | `research/templates/schmerzpunkt-analyse-template.md` | `research/schmerzpunkte/` |

**Skills vs. Agents:** Die vier Skills erledigen Aufgaben direkt im Gespräch. Die drei Knuvi-Agents (`.claude/agents/`) sind eigenständige Subagenten für wiederkehrende Aufgaben – sie arbeiten nach denselben Grundregeln und No-Gos dieser Datei. Für bezahlte Ads gilt der Skill `ad-creative`, für organische Posts der `knuvi-creative-agent` – nicht verwechseln.

**Operativer Quartalsplan:** Der wochengenaue Q3-Plan liegt in `plan/` (Übersicht + Monatsdateien + `kpi-log.md`). Plan-Dokumente in `plan/` sind von der Template-Pflicht ausgenommen; neue Plan-Dateien folgen der Struktur von `plan/2026-q3-uebersicht.md`. Das `plan/kpi-log.md` ist eine Tracker-Datei (siehe No-Gos). Bei Widersprüchen zwischen `ROADMAP.md` und `plan/` gilt `plan/`.

## Arbeitsablauf für jede Aufgabe

1. Passenden Skill lesen (Tabelle oben).
2. Template kopieren, vollständig ausfüllen.
3. Akzeptanzkriterien des Skills durchgehen – erst wenn alle erfüllt sind, ist die Aufgabe fertig.
4. Am Ende kurz zusammenfassen: Was wurde erstellt, wo liegt es, welche Platzhalter sind offen.

## Git-Konventionen

- Commit-Messages auf Deutsch, Präsens, kurz: `Fügt UGC-Skript für Sommer-Sale hinzu`.
- Ein Commit pro abgeschlossener Aufgabe, nicht pro Datei.
- Nur committen/pushen, wenn Melanie es verlangt oder es Teil des Auftrags ist.
