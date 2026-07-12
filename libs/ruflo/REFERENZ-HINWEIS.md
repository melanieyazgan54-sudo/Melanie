# Ruflo – Referenz-Hinweis für dieses Repo

> Diese Kopie von [ruvnet/ruflo](https://github.com/ruvnet/ruflo) (Stand `7ef4d4e`, MIT-Lizenz) dient ausschließlich als **Referenz-Library für Agenten-Workflow-Muster** – sie wird hier nicht installiert oder ausgeführt.

## Was Ruflo ist

Ein Agent-Meta-Harness für Claude Code: Muster für Agenten-Koordination (Swarms), Selbstlern-Loops, Memory-Systeme und Workflow-Orchestrierung. Nachschlagen lohnt sich in `docs/` (u. a. `USERGUIDE.md`, `metaharness-user-guide.md`) und `plugins/` (Agent-/Plugin-Definitionen als Strukturvorlagen).

## Was beim Vendoring entfernt wurde (bewusst, am 2026-07-07)

- `.git/` – Git-Historie (wie von Melanie verlangt)
- `v3/`, `crates/`, `ruflo/`, `bin/`, `tests/`, `scripts/`, `verification/`, `data/` – Rust-/TypeScript-Quellcode, Tests und Build-Artefakte (~95 MB); für Referenz-Zwecke irrelevant, im Original-Repo jederzeit einsehbar
- `ruflo-plugins.gif`, `agentdb.rvf(.lock)`, Lockfiles, `package.json`, `Cargo.toml`, `tsconfig.json` – Binär-/Build-Dateien

## Wichtig: umbenannte Steuerdateien

`CLAUDE.md` und `CLAUDE.local.md` des Original-Repos wurden zu `ruflo-claude-anweisungen.reference.md` / `ruflo-claude-local.reference.md` umbenannt. Grund: Claude Code lädt CLAUDE.md-Dateien in Arbeitsverzeichnissen automatisch – die Ruflo-Anweisungen (Swarm-Kommandos, MCP-Tools) würden sonst Melanies Regeln überlagern, sobald jemand in diesem Ordner arbeitet. Als `.reference.md` sind sie les-, aber nicht wirksam.

## Nutzung (Token-Disziplin beachten!)

Nie den Ordner scannen – gezielt eine Datei aus `docs/` öffnen, Muster herausziehen, auf die Knuvi-Agents (`.claude/agents/`) übertragen. Wer Ruflo tatsächlich ausführen will, nutzt `npx ruflo` aus dem npm-Registry – nicht diese Kopie.
