# CLAUDE.md – Arbeitsregeln für dieses Repository

> Diese Datei definiert, wie Claude Code in diesem E-Commerce-Marketing-Repository arbeitet: Konventionen, Pfade, No-Gos. Sie ist bewusst so explizit geschrieben, dass auch kleinere Modelle (Sonnet, Haiku) ohne Raten arbeiten können.

## Projektkontext

- **Inhaberin:** Melanie, E-Commerce (Shopify-Stores).
- **Vier Kernaufgaben:** Ad Creatives, UGC-Skripte, Influencer-Outreach, CRO.
- **Kein Code-Projekt:** Dieses Repo enthält Marketing-Dokumente in Markdown, keinen Anwendungscode. Es gibt keine Builds, Tests oder Linter.

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
- ❌ Tracker-Dateien (`outreach-tracker.md`, `ab-test-log.md`) nie neu aufbauen – nur Zeilen ergänzen oder Status aktualisieren.
- ❌ Nichts direkt an Influencer/Kunden senden – dieses Repo erstellt nur Entwürfe.

## Pfade und Zuständigkeiten

| Aufgabe | Skill | Template | Ergebnis ablegen in |
|---|---|---|---|
| Ad Creative / Anzeige | `.claude/skills/ad-creative/` | `ad-creatives/templates/creative-briefing-template.md` | `ad-creatives/kampagnen/` |
| UGC-Skript | `.claude/skills/ugc-skript/` | `ugc-scripts/templates/ugc-skript-template.md` | `ugc-scripts/skripte/` |
| Influencer-Outreach | `.claude/skills/influencer-outreach/` | `influencer-outreach/templates/outreach-template.md` | Tracker aktualisieren: `influencer-outreach/outreach-tracker.md` |
| CRO-Audit / A/B-Test | `.claude/skills/cro-audit/` | `cro/templates/cro-audit-template.md` | `cro/audits/` + `cro/ab-test-log.md` |

## Arbeitsablauf für jede Aufgabe

1. Passenden Skill lesen (Tabelle oben).
2. Template kopieren, vollständig ausfüllen.
3. Akzeptanzkriterien des Skills durchgehen – erst wenn alle erfüllt sind, ist die Aufgabe fertig.
4. Am Ende kurz zusammenfassen: Was wurde erstellt, wo liegt es, welche Platzhalter sind offen.

## Git-Konventionen

- Commit-Messages auf Deutsch, Präsens, kurz: `Fügt UGC-Skript für Sommer-Sale hinzu`.
- Ein Commit pro abgeschlossener Aufgabe, nicht pro Datei.
- Nur committen/pushen, wenn Melanie es verlangt oder es Teil des Auftrags ist.
