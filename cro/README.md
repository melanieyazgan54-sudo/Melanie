# CRO – Conversion-Rate-Optimierung

> Dieser Ordner enthält alles zur Optimierung der Shopify-Stores: Audit-Checkliste in `templates/`, durchgeführte Audits in `audits/`, alle A/B-Tests im `ab-test-log.md`.

## Ablauf

1. **Audit:** Seite anhand `templates/cro-audit-template.md` durchgehen, Ergebnis als `audits/JJJJ-MM-TT-seitenname.md` speichern.
2. **Priorisieren:** Jede gefundene Schwachstelle bekommt eine Priorität (siehe Template) – umgesetzt wird von oben nach unten.
3. **Testen:** Änderungen mit messbarem Effekt als A/B-Test im `ab-test-log.md` anlegen: erst Hypothese, dann Test, dann Ergebnis.
4. **Umsetzen:** Änderungen im Shopify-Store macht Melanie (oder Claude auf explizite Anweisung mit Details, welche Seite/welches Theme).

## Regeln

- Keine Änderung ohne Hypothese: Jeder Eintrag im Test-Log braucht „Wenn wir X ändern, dann Y, weil Z".
- Immer nur eine Variable pro Test.
- Test-Log nie neu aufbauen, nur Zeilen ergänzen/aktualisieren.
- Kennzahlen (Conversion Rate, AOV) kommen von Melanie aus Shopify Analytics – nie schätzen oder erfinden.
