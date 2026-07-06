# A/B-Test-Log

> Zentrale Historie aller Conversion-Tests: erst Hypothese, dann Test, dann Ergebnis. Nur Zeilen ergänzen oder aktualisieren – niemals Zeilen löschen oder die Tabelle neu aufbauen.

**Regeln:** Eine Variable pro Test. Jeder Test braucht eine Hypothese nach dem Muster „Wenn wir X ändern, dann passiert Y, weil Z". Kennzahlen kommen aus Shopify Analytics von Melanie – nie schätzen.

| Nr. | Start | Ende | Seite | Hypothese (Wenn X, dann Y, weil Z) | Variante A (Kontrolle) | Variante B | Kennzahl | Ergebnis | Entscheidung |
|---|---|---|---|---|---|---|---|---|---|
| 0 *(Beispielzeile)* | 2026-07-20 | 2026-08-03 | Produktseite | Wenn wir die Versandkosten schon auf der Produktseite anzeigen, steigt die CR, weil unerwartete Kosten im Checkout der häufigste Abbruchgrund sind | Versandkosten erst im Checkout | „Kostenloser Versand ab X €" unter dem Preis | CR Produktseite→Kauf | – | – |

## Status-Konvention

- Laufender Test: „Ergebnis" und „Entscheidung" bleiben leer, Ende-Datum ist geplantes Ende.
- Abgeschlossen: Ergebnis mit Zahlen (z. B. „CR 2,1 % → 2,6 %"), Entscheidung: `B übernehmen` / `A behalten` / `nicht eindeutig – neu testen`.
- Die Beispielzeile Nr. 0 bleibt als Referenz stehen; echte Tests beginnen bei Nr. 1.
