---
name: cro-audit
description: Führt ein Conversion-Audit einer Shopify-Seite durch oder legt A/B-Tests im Test-Log an. Nutzen, wenn Melanie eine Store-Seite optimieren, die Conversion Rate verbessern oder einen Test planen möchte.
---

# Skill: CRO-Audit & A/B-Tests

> Dieser Skill erzeugt ein strukturiertes Conversion-Audit in `cro/audits/` und pflegt das A/B-Test-Log. Änderungen am Shopify-Store selbst macht Melanie oder erfolgen nur auf ihre explizite Anweisung.

## Schritte

1. Lies `CLAUDE.md` (Grundregeln und No-Gos) und `cro/README.md`.
2. Kläre aus Melanies Anfrage: welche Seite (URL), welcher Seitentyp. Ohne Seiteninhalt (Screenshot, HTML, Beschreibung oder Web-Zugriff) kann kein Audit bewertet werden – dann die Checkliste als vorbereitetes Audit mit `[PLATZHALTER]`-Bewertungen anlegen und Melanie sagen, was du brauchst.
3. Kopiere `cro/templates/cro-audit-template.md`, gehe jede Checkliste durch und bewerte jeden Punkt (✅/⚠️/❌/N/A) mit kurzer Begründung bei ⚠️ und ❌.
4. Erstelle die Befund-Tabelle mit Priorisierung (Effekt × geringer Aufwand zuerst; Above-the-Fold schlägt fast alles).
5. Speichere als `cro/audits/JJJJ-MM-TT-seitenname.md`.
6. Befunde mit messbarem Effekt: als neue Zeile mit Hypothese („Wenn X, dann Y, weil Z") ins `cro/ab-test-log.md` eintragen – eine Variable pro Test, fortlaufende Nummer.

## Akzeptanzkriterien – erst wenn ALLE erfüllt sind, ist die Aufgabe fertig

- [ ] Audit-Datei liegt in `cro/audits/` und folgt dem Namensschema.
- [ ] Jeder Checklisten-Punkt ist bewertet (✅/⚠️/❌/N/A); ⚠️ und ❌ haben eine Begründung.
- [ ] Befund-Tabelle ist priorisiert und jede Priorität ist begründet.
- [ ] Mindestens der wichtigste Befund ist als Test-Hypothese im `cro/ab-test-log.md` angelegt (Muster „Wenn X, dann Y, weil Z", eine Variable).
- [ ] Im Test-Log wurde keine Zeile gelöscht und die Tabelle nicht neu aufgebaut.
- [ ] Keine Kennzahl wurde geschätzt oder erfunden – fehlende Zahlen sind `[PLATZHALTER: …]` und am Ende der Antwort aufgelistet.
