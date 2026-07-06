# CRO-Audit: Beispiel – Produktseite (Referenz)

> Vollständig ausgefülltes Referenz-Audit einer fiktiven Produktseite. Neue Audits sollen genau diesem Format entsprechen. Befunde und Bewertungen sind erfundene Beispiele zur Illustration – kein echtes Audit.

## Meta

| Feld | Wert |
|---|---|
| Datum | 2026-07-06 |
| Seite | [PLATZHALTER: Produktseiten-URL] |
| Seitentyp | Produktseite |
| Aktuelle CR | [PLATZHALTER: aus Shopify Analytics] |
| Gerät im Fokus | Mobil |

## Checkliste

### Above the Fold (ohne Scrollen sichtbar)

- ✅ Nutzenversprechen in einem Satz klar („Was bekomme ich, warum hier?")
- ⚠️ Hauptbild zeigt Produkt im Einsatz, nicht nur Packshot – aktuell nur Packshot vor weißem Hintergrund
- ❌ Preis und Verfügbarkeit sofort sichtbar – Preis erscheint erst nach Scrollen
- ✅ Primärer CTA-Button auffällig und eindeutig beschriftet
- ⚠️ Ladezeit mobil akzeptabel (< 3 Sek. gefühlt) – Hero-Bild lädt sichtbar nach

### Vertrauen & Social Proof

- ❌ Bewertungen/Sterne sichtbar, mit Anzahl – keine Bewertungen eingebunden
- ✅ Garantien klar (Geld-zurück, Versand, Rückgabe)
- ⚠️ Echte Kundenfotos oder UGC eingebunden – nur ein Stockfoto-ähnliches Bild
- ✅ Zahlungsarten-Logos im Footer/Checkout

### Produktdarstellung

- ⚠️ Mind. 5 Bilder: Einsatz, Details, Größenvergleich, Verpackung – nur 3 Bilder, Größenvergleich fehlt
- ✅ Beschreibung beantwortet die Top-3-Einwände der Persona
- ✅ Vorteile vor Eigenschaften („spart dir X" statt „hat Y")
- ❌ FAQ-Sektion mit den häufigsten Fragen aus dem Support – nicht vorhanden

### Kaufprozess

- ✅ Warenkorb-Zugang offensichtlich, Schritte bis Checkout minimal
- ❌ Versandkosten früh transparent (größter Abbruchgrund!) – erst im Checkout sichtbar
- N/A Upsell/Cross-Sell vorhanden, aber nicht aufdringlich – nur ein Produkt im Sortiment
- ✅ Gast-Checkout möglich

## Befunde

| Nr. | Befund | Bereich | Priorität (1 = zuerst) | Begründung der Priorität |
|---|---|---|---|---|
| 1 | Preis erst nach Scrollen sichtbar | Above the Fold | 1 | Above-the-Fold-Problem, minimaler Aufwand (Theme-Einstellung), direkter CR-Hebel |
| 2 | Versandkosten erst im Checkout | Kaufprozess | 2 | Häufigster Abbruchgrund, geringer Aufwand („Kostenloser Versand ab X €" unter dem Preis) |
| 3 | Keine Bewertungen eingebunden | Social Proof | 3 | Großer Vertrauenshebel, mittlerer Aufwand (Review-App + echte Bewertungen nötig) |
| 4 | Hauptbild nur Packshot | Above the Fold | 4 | Guter Hebel, aber neues Bildmaterial nötig (höherer Aufwand) |
| 5 | FAQ-Sektion fehlt | Produktdarstellung | 5 | Entkräftet Einwände, Aufwand niedrig, Effekt aber kleiner als 1–3 |

## Maßnahmen

- Befund 2 als A/B-Test-Hypothese ins `../ab-test-log.md` eingetragen (dort Zeile Nr. 0, Beispielzeile).
- Befund 1 ist ein offensichtlicher Fix → direkt umsetzen, hier als „behoben am JJJJ-MM-TT" markieren, sobald erledigt.
- Befunde 3–5: nach Umsetzung von 1–2 angehen; Bewertungen erfordern zuerst echte Kundenstimmen (nie erfinden, siehe `CLAUDE.md`).
