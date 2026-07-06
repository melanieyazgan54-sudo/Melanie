---
name: ugc-skript
description: Schreibt ein UGC-Video-Skript (TikTok, Reels, Ads) als Creator-Briefing. Nutzen, wenn Melanie ein UGC-Video, Creator-Skript oder organisches Video-Konzept möchte.
---

# Skill: UGC-Skript schreiben

> Dieser Skill erzeugt ein drehfertiges Video-Skript als eigene Datei in `ugc-scripts/skripte/`, so konkret, dass ein Creator ohne Rückfragen drehen kann.

## Schritte

1. Lies `CLAUDE.md` (Grundregeln und No-Gos) und `ugc-scripts/README.md`.
2. Kläre aus Melanies Anfrage: Produkt, Video-Typ (Problem/Lösung, Unboxing, Testimonial-Stil, How-to), Plattform, Ziel-Länge. Fehlt etwas, nutze `[PLATZHALTER: …]` – nichts erfinden.
3. Kopiere `ugc-scripts/templates/ugc-skript-template.md` und fülle **jeden** Abschnitt aus. Gesprochener Text wird wörtlich ausgeschrieben.
4. Schreibe gesprochene Sprache (wie eine Freundin erzählt), keine Werbetexter-Floskeln.
5. Speichere als `ugc-scripts/skripte/JJJJ-MM-TT-kurzbeschreibung.md`.
6. Orientiere dich am Detailgrad des Referenz-Beispiels: `ugc-scripts/skripte/2026-07-06-beispiel-problem-loesung.md`.

## Akzeptanzkriterien – erst wenn ALLE erfüllt sind, ist die Aufgabe fertig

- [ ] Datei liegt in `ugc-scripts/skripte/` und folgt dem Namensschema.
- [ ] Jede Szene hat alle drei Angaben: Bild, wörtlichen gesprochenen Text, Text-Overlay.
- [ ] Hook ist ≤ 3 Sekunden Sprechzeit und funktioniert ohne Kontext.
- [ ] Szenen-Dauern summieren sich auf die Ziel-Länge.
- [ ] CTA nennt einen konkreten nächsten Schritt (z. B. „Link in Bio").
- [ ] Abnahme-Checkliste am Dateiende ist durchgegangen und abgehakt.
- [ ] Keine erfundenen Testimonials/Zahlen; fehlende Infos als `[PLATZHALTER: …]` markiert und am Ende der Antwort aufgelistet.
