---
name: ad-creative
description: Erstellt ein Ad-Creative-Briefing für Meta oder TikTok Ads. Nutzen, wenn Melanie eine neue Anzeige, ein neues Creative, einen Hook-Test oder eine Creative-Variante möchte.
---

# Skill: Ad-Creative-Briefing erstellen

> Dieser Skill erzeugt ein vollständiges Creative-Briefing als eigene Datei in `ad-creatives/kampagnen/`, basierend auf dem Pflicht-Template.

## Schritte

1. Lies `CLAUDE.md` (Grundregeln und No-Gos) und `ad-creatives/README.md`.
2. Kläre aus Melanies Anfrage: Produkt, Plattform, Format, Angle. Fehlt etwas davon, nutze `[PLATZHALTER: …]` und liste die offenen Punkte am Ende auf – nichts erfinden.
3. Kopiere `ad-creatives/templates/creative-briefing-template.md` und fülle **jeden** Abschnitt aus.
4. Wähle den Hook aus `ad-creatives/templates/hook-bibliothek.md` (Nummer referenzieren) oder formuliere einen neuen und trage ihn dort als neue Zeile ein.
5. Speichere als `ad-creatives/kampagnen/JJJJ-MM-TT-kurzbeschreibung.md` (klein, Bindestriche, keine Umlaute).
6. Orientiere dich am Detailgrad des Referenz-Beispiels: `ad-creatives/kampagnen/2026-07-06-beispiel-problem-loesung-video.md`.

## Akzeptanzkriterien – erst wenn ALLE erfüllt sind, ist die Aufgabe fertig

- [ ] Datei liegt in `ad-creatives/kampagnen/` und folgt dem Namensschema.
- [ ] Kein Template-Abschnitt fehlt; Unzutreffendes ist mit „N/A" + Begründung gefüllt.
- [ ] Hook ist ≤ 12 Wörter, funktioniert ohne Kontext und ist in der Hook-Bibliothek referenziert oder neu eingetragen.
- [ ] Bei Video: Szenentabelle deckt die komplette Laufzeit lückenlos ab; bei Static/Carousel: kompletter Anzeigentext steht wörtlich im Briefing.
- [ ] Erfolgskriterium mit konkreter Kennzahl und Testdauer ist definiert.
- [ ] Keine erfundenen Zahlen/Behauptungen; alle fehlenden Infos als `[PLATZHALTER: …]` markiert und am Ende der Antwort aufgelistet.
- [ ] Status im Meta-Block ist `entwurf`.
