# Melanie – E-Commerce Marketing Hub

> Zentrales Arbeits-Repository für E-Commerce-Marketing: Ad Creatives, UGC-Skripte, Influencer-Outreach und Conversion-Rate-Optimierung (CRO) für Shopify-Stores.

## Was ist das hier?

Dieses Repository ist die einzige Quelle der Wahrheit für alle Marketing-Assets und -Prozesse. Es ist so aufgebaut, dass Claude Code (auch mit kleineren Modellen wie Haiku) jede Aufgabe ohne Rückfragen ausführen kann: Jede Aufgabe hat einen eigenen Ordner, ein Template, ein ausgefülltes Beispiel und einen Skill mit Akzeptanzkriterien.

## Navigation

| Bereich | Ordner | Wofür |
|---|---|---|
| 📍 Projekt-Roadmap | [`ROADMAP.md`](ROADMAP.md) | Phasenplan: Was wird wann aufgebaut |
| 📅 Content-Plan | [`content-plan/`](content-plan/CONTENT-PLAN.md) | Marketing-Content-Plan: Kanäle, Säulen, Kadenz, KPIs |
| 🎨 Ad Creatives | [`ad-creatives/`](ad-creatives/README.md) | Briefings, Hooks und Kampagnen für Meta/TikTok Ads |
| 🎬 UGC-Skripte | [`ugc-scripts/`](ugc-scripts/README.md) | Skripte für User-Generated-Content-Videos |
| 🤝 Influencer-Outreach | [`influencer-outreach/`](influencer-outreach/README.md) | Outreach-Templates und Kontakt-Tracking |
| 📈 CRO | [`cro/`](cro/README.md) | Shopify-Audits, A/B-Test-Log, Checklisten |
| 🤖 Claude-Setup | [`CLAUDE.md`](CLAUDE.md) + [`.claude/skills/`](.claude/skills/) | Regeln, Konventionen und Skills für Claude Code |

## Schnellstart (für Claude Code)

1. Lies zuerst [`CLAUDE.md`](CLAUDE.md) – dort stehen alle Konventionen und No-Gos.
2. Für eine der vier Kernaufgaben: Nutze den passenden Skill in `.claude/skills/` – jeder Skill nennt Template, Zielordner, Namensschema und Akzeptanzkriterien.
3. Neue Dateien entstehen **immer** aus dem Template des jeweiligen Ordners, nie freihändig.

## Schnellstart (für Menschen)

- Neue Werbeanzeige? → `ad-creatives/templates/creative-briefing-template.md` kopieren und ausfüllen (oder Claude mit dem Skill `ad-creative` beauftragen).
- Neues UGC-Video? → `ugc-scripts/templates/ugc-skript-template.md`.
- Influencer anschreiben? → `influencer-outreach/templates/outreach-template.md` + Eintrag im `outreach-tracker.md`.
- Store-Seite optimieren? → `cro/templates/cro-audit-template.md` durchgehen, Tests im `ab-test-log.md` festhalten.

## Projektstruktur

```
Melanie/
├── README.md                  ← Du bist hier
├── CLAUDE.md                  ← Regeln für Claude Code (immer zuerst lesen)
├── ROADMAP.md                 ← Projekt-Roadmap in Phasen
├── content-plan/
│   └── CONTENT-PLAN.md        ← Umfassender Marketing-Content-Plan
├── ad-creatives/
│   ├── README.md
│   ├── templates/             ← Briefing-Template + Hook-Bibliothek
│   └── kampagnen/             ← Fertige Briefings, eine Datei pro Creative
├── ugc-scripts/
│   ├── README.md
│   ├── templates/             ← Skript-Template
│   └── skripte/               ← Fertige Skripte, eine Datei pro Video
├── influencer-outreach/
│   ├── README.md
│   ├── templates/             ← Outreach-Nachrichten (Erstkontakt + Follow-ups)
│   └── outreach-tracker.md    ← Status aller Kontakte
├── cro/
│   ├── README.md
│   ├── templates/             ← Audit-Checkliste
│   ├── audits/                ← Durchgeführte Audits, eine Datei pro Seite
│   └── ab-test-log.md         ← Alle A/B-Tests mit Hypothese und Ergebnis
└── .claude/
    └── skills/                ← Ein Skill pro Kernaufgabe, mit Akzeptanzkriterien
```
