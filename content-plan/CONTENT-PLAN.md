# Marketing-Content-Plan

> Diese Datei ist der zentrale Content-Plan: welche Inhalte auf welchen Kanälen in welchem Rhythmus erscheinen, nach welchen Content-Säulen sie sich richten und an welchen KPIs der Erfolg gemessen wird.

**Stand:** 06.07.2026 · **Planungshorizont:** Q3 2026 (Juli–September) · **Review:** monatlich, jeweils zum 1.

## 1. Ziele Q3 2026

| Ziel | Kennzahl | Zielwert |
|---|---|---|
| Profitables Ad-Testing etablieren | ROAS auf Kaltakquise-Kampagnen | ≥ [PLATZHALTER: Ziel-ROAS, z. B. 2,0] |
| UGC-Pipeline aufbauen | Fertige UGC-Videos pro Monat | 4 |
| Influencer-Netzwerk starten | Aktive Kooperationen | 3 |
| Conversion Rate steigern | CR der Produktseite | +20 % ggü. Baseline [PLATZHALTER: aktuelle CR] |

## 2. Content-Säulen

Jedes Stück Content gehört zu genau einer Säule. Die Säule bestimmt Ton und Ziel.

| Säule | Anteil | Ziel | Typische Formate |
|---|---|---|---|
| **Problem & Lösung** | 40 % | Kaufinteresse wecken | UGC-Video, Ad Creative, Reel |
| **Social Proof** | 25 % | Vertrauen aufbauen | Testimonial-UGC, Bewertungs-Grafik, Influencer-Post |
| **Produkt-Education** | 20 % | Einwände entkräften | How-to-Reel, Vergleichsgrafik, FAQ-Content |
| **Brand & Behind-the-Scenes** | 15 % | Bindung & Wiedererkennung | Story-Content, Founder-Video |

## 3. Kanäle & Kadenz

> **Hinweis (07.07.2026):** Für Q3 gilt die Kadenz aus `plan/2026-q3-uebersicht.md`: 3–4 Post-Entwürfe/Woche, jeweils für TikTok + Instagram adaptiert. Die Tabelle unten ist die langfristige Ziel-Kadenz.

| Kanal | Frequenz | Formate | Verantwortlich |
|---|---|---|---|
| Meta Ads (FB/IG) | laufend, 2 neue Creatives/Woche im Test | Video 9:16, Statics 1:1 | Briefings: Claude · Schaltung: Melanie |
| TikTok (organisch + Ads) | 3 Posts/Woche | UGC-Videos 9:16, 15–45 Sek. | Skripte: Claude · Dreh: Creator |
| Instagram organisch | 3 Posts/Woche (2 Reels, 1 Carousel) | Reels, Carousels, Stories täglich | Planung: Claude · Posting: Melanie |
| E-Mail | 1 Newsletter/Woche + Flows | Newsletter, Abandoned-Cart-Flow | Texte: Claude · Versand: [PLATZHALTER: E-Mail-Tool, z. B. Klaviyo] |
| Influencer-Kooperationen | 10 Erstkontakte/Woche in Phase 2 | Seeding, bezahlte Posts, Affiliate | Outreach-Entwürfe: Claude · Versand: Melanie |

## 4. Wochenrhythmus (Standard-Woche)

| Tag | Aufgabe | Output landet in |
|---|---|---|
| Montag | Performance-Check der Vorwoche, Kennzahlen in Briefings/Test-Log nachtragen | `ad-creatives/kampagnen/`, `cro/ab-test-log.md` |
| Dienstag | 2 neue Ad-Creative-Briefings | `ad-creatives/kampagnen/` |
| Mittwoch | 1 UGC-Skript + organische Posts planen (Agent: `knuvi-creative-agent`) | Skript: `ugc-scripts/skripte/` · Posts: `social-media/posts/` |
| Donnerstag | Influencer-Outreach: Recherche + Erstkontakt-Entwürfe, Follow-ups laut Tracker | `influencer-outreach/outreach-tracker.md` |
| Freitag | Newsletter-Text + 1 CRO-Maßnahme (Audit-Punkt umsetzen oder Test starten) | Newsletter: direkt in der Antwort an Melanie (kein Repo-Ordner) · CRO: `cro/audits/`, `cro/ab-test-log.md` |

Zusätzlich zu den Tagesaufgaben: **wöchentlich** Trend-Report (Montag, Agent `knuvi-trend-scout` → `research/trends/`) und **alle 2 Wochen** Schmerzpunkt-Analyse (Donnerstag, Agent `knuvi-psychologie-analyst` → `research/schmerzpunkte/`).

## 5. Monatsthemen Q3

| Monat | Schwerpunkt | Anlass/Begründung |
|---|---|---|
| Juli | Sommer-Sale-Vorbereitung + erste Creative-Tests | Phase 2 der Roadmap startet KW 29 |
| August | UGC-Offensive: Social Proof sammeln und ausspielen | Creator aus Juli-Outreach liefern |
| September | CRO-Fokus + Vorbereitung Q4 (Black-Friday-Planung beginnt!) | Traffic aus Tests optimal konvertieren |

## 6. KPIs & Reporting

- **Wöchentlich (Montag):** CTR, CPC, ROAS pro aktivem Creative → in den Abschnitt „Ergebnis" des jeweiligen Briefings eintragen.
- **Monatlich (zum 1.):** Ziele aus Abschnitt 1 prüfen, Content-Säulen-Verteilung checken, diesen Plan aktualisieren.
- **Faustregeln:** Creative mit CTR < 1 % nach 3 Tagen und ausreichend Impressionen → pausieren und im Briefing dokumentieren. Creative mit ROAS über Ziel → Budget +20–30 %, Varianten nachproduzieren (siehe Roadmap Phase 4).

## 7. Offene Platzhalter (von Melanie zu liefern)

- [PLATZHALTER: Produktname(n) und Store-URL(s)]
- [PLATZHALTER: Ziel-Persona – Alter, Interessen, Hauptproblem]
- [PLATZHALTER: Ziel-ROAS und aktuelle Conversion Rate als Baseline]
- [PLATZHALTER: E-Mail-Tool und bestehende Flows]
- [PLATZHALTER: Werbebudget pro Monat]

Sobald diese Angaben vorliegen, werden sie hier eingetragen und die Platzhalter in allen Beispieldateien ersetzt.
