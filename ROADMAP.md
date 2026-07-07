# Projekt-Roadmap

> Diese Datei ist der Phasenplan für den Aufbau des Marketing-Systems: was in welcher Reihenfolge entsteht und woran wir erkennen, dass eine Phase abgeschlossen ist.

**Stand:** 07.07.2026 · **Nächster Review:** jeweils am Ende einer Phase

> **⚠️ Maßgeblichkeit (seit 07.07.2026):** Die Phasen 2–4 dieser Datei sind durch den wochengenauen Q3-Plan in [`plan/2026-q3-uebersicht.md`](plan/2026-q3-uebersicht.md) **ersetzt** (North Star: 10.000 € Monatsumsatz im September bei ROAS ≥ 2,0). Der Q3-Plan testet ab KW 28 und skaliert ab KW 32 – bei Abweichungen zwischen beiden Dateien gilt IMMER der Q3-Plan. Die Phasen unten bleiben nur als historischer Kontext stehen.

## Überblick

| Phase | Zeitraum | Ziel | Status |
|---|---|---|---|
| 1 – Fundament | KW 28 (bis 12.07.2026) | Repo-Struktur, Templates, Claude-Setup stehen | ✅ erledigt |
| 2 – Content-Produktion | ~~KW 29–32~~ | Erste Assets für alle 4 Bereiche produziert | ▶ ersetzt durch `plan/2026-07-juli.md` (startet KW 28) |
| 3 – Testen & Messen | ~~KW 33–36~~ | A/B-Tests laufen, erste Daten im Test-Log | ▶ ersetzt durch `plan/` (Testen ab KW 28, Reviews R1–R6) |
| 4 – Skalieren | ~~ab KW 37~~ | Gewinner skalieren, Verlierer aussortieren | ▶ ersetzt durch `plan/2026-08-august.md` (Skalierung ab KW 32) |

## Phase 1 – Fundament (erledigt)

- [x] Ordnerstruktur für alle 4 Kernbereiche
- [x] README, CLAUDE.md, Roadmap, Content-Plan
- [x] Template + Referenz-Beispiel pro Bereich (Creative-Briefing, UGC-Skript, Beispiel-Audit, Beispielzeilen in Outreach-Tracker und Test-Log)
- [x] Ein Claude-Skill pro Kernaufgabe, mit Akzeptanzkriterien

**Fertig, wenn:** Ein frisches Claude-Modell kann jede der 4 Aufgaben nur mit den Dateien in diesem Repo ohne Rückfragen ausführen.

## Phase 2 – Content-Produktion (KW 29–32)

- [ ] 6 Ad-Creative-Briefings (3 Angles × 2 Formate) für das Hauptprodukt
- [ ] 4 UGC-Skripte (2 × Problem/Lösung, 1 × Unboxing, 1 × Testimonial-Stil)
- [ ] 20 Influencer recherchiert und im Tracker erfasst, 10 Erstkontakte als Entwurf
- [ ] 1 vollständiges CRO-Audit der Produktseite mit priorisierter Maßnahmenliste

**Fertig, wenn:** Alle vier Ordner enthalten mindestens die genannte Anzahl fertiger Dokumente ohne offene Platzhalter bei den Pflichtfeldern.

**Voraussetzung von Melanie:** Produktname(n), Preise, Ziel-Persona, Store-URL(s) – siehe `[PLATZHALTER]`-Einträge in den Beispieldateien.

## Phase 3 – Testen & Messen (KW 33–36)

- [ ] Creatives aus Phase 2 live schalten (macht Melanie manuell in Meta/TikTok Ads)
- [ ] Wöchentlich: Performance-Daten in die Briefings nachtragen (Abschnitt „Ergebnis")
- [ ] Mindestens 2 A/B-Tests auf der Produktseite starten und im `cro/ab-test-log.md` dokumentieren
- [ ] Influencer-Follow-ups nach Tracker-Status (Follow-up 1 nach 4 Tagen, Follow-up 2 nach weiteren 5 Tagen)

**Fertig, wenn:** Jedes live geschaltete Creative hat eingetragene Kennzahlen und jeder A/B-Test im Log hat ein Ergebnis oder ein Enddatum.

## Phase 4 – Skalieren (ab KW 37)

- [ ] Gewinner-Creatives: je 2 Varianten (neuer Hook, gleicher Body) nachproduzieren
- [ ] Verlierer dokumentiert archivieren (Status im Briefing auf `archiviert`)
- [ ] Erfolgreiche Influencer-Kooperationen in Langzeit-Partnerschaften überführen
- [ ] Hook-Bibliothek (`ad-creatives/templates/hook-bibliothek.md`) mit validierten Hooks aus Phase 3 erweitern

**Fertig, wenn:** Die Hook-Bibliothek enthält mindestens 5 durch echte Daten validierte Hooks und das Test-Log zeigt eine dokumentierte Entscheidungshistorie.

## Arbeitsregel für diese Datei

Checkboxen werden abgehakt, sobald das Kriterium erfüllt ist. Neue Aufgaben werden in die passende Phase eingefügt, nie in eine abgeschlossene. Statusspalte im Überblick aktuell halten.
