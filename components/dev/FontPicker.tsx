"use client";

import { useEffect, useState } from "react";
import {
  fontOptions,
  fontPresets,
  DEFAULT_PRIMARY_FONT,
  DEFAULT_SECONDARY_FONT,
} from "@/data/fonts";
import { CloseIcon } from "@/components/ui/Icons";

// Výber písma pre fázu návrhu. Mení CSS premenné --font-primary (nadpisy)
// a --font-secondary (text) na <html>, výber si pamätá v localStorage.
// Vypína sa cez SHOW_FONT_PICKER v constants/index.ts.

const STORAGE_KEY = "emis-font-picker";

type Slot = "primary" | "secondary";
type Selection = Record<Slot, string>;

const defaults: Selection = {
  primary: DEFAULT_PRIMARY_FONT,
  secondary: DEFAULT_SECONDARY_FONT,
};

const valid = (v: unknown): v is string =>
  typeof v === "string" && fontOptions.some((f) => f.variable === v);

function readStored(): Selection {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
    return {
      primary: valid(raw.primary) ? raw.primary : defaults.primary,
      secondary: valid(raw.secondary) ? raw.secondary : defaults.secondary,
    };
  } catch {
    return defaults;
  }
}

const labelOf = (variable: string) =>
  fontOptions.find((f) => f.variable === variable)?.label ?? variable;

export function FontPicker() {
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState<Slot>("primary");
  const [selection, setSelection] = useState<Selection>(readStored);

  // Synchronizácia výberu do CSS premenných a localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-primary", `var(${selection.primary})`);
    root.style.setProperty("--font-secondary", `var(${selection.secondary})`);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  }, [selection]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const choose = (variable: string) =>
    setSelection((s) => ({ ...s, [slot]: variable }));

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2.5 rounded-xl bg-foreground pl-3 pr-4 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(6,15,38,0.6)] hover:bg-dark"
        aria-label="Otvoriť výber písma"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[15px] text-foreground">
          Aa
        </span>
        Písmo
      </button>
    );
  }

  const tabs: { id: Slot; title: string; hint: string }[] = [
    { id: "primary", title: "Primárne", hint: "nadpisy, logo" },
    { id: "secondary", title: "Sekundárne", hint: "text, tlačidlá" },
  ];

  return (
    <div
      role="dialog"
      aria-label="Výber písma"
      className="fixed bottom-5 right-5 z-50 flex max-h-[min(640px,calc(100dvh-40px))] w-[340px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl bg-white text-foreground shadow-[0_24px_60px_-16px_rgba(6,15,38,0.55)] ring-1 ring-black/10"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="flex items-center justify-between bg-foreground px-4 py-3 text-white">
        <p className="text-sm font-bold">Výber písma</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Zavrieť výber písma"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/15"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Hotové kombinácie — jedným klikom nadpisy aj text */}
      <div className="border-b border-border p-2">
        <p className="px-1 pb-1.5 text-[12px] font-semibold text-muted">Kombinácie</p>
        <div className="grid grid-cols-2 gap-1">
          {fontPresets.map((preset) => {
            const active =
              selection.primary === preset.primary &&
              selection.secondary === preset.secondary;
            return (
              <button
                key={preset.name}
                type="button"
                onClick={() =>
                  setSelection({ primary: preset.primary, secondary: preset.secondary })
                }
                aria-pressed={active}
                className={`rounded-lg px-2.5 py-2 text-left transition-colors ${
                  active ? "bg-surface ring-2 ring-primary" : "hover:bg-surface"
                }`}
              >
                <span
                  className="block text-[17px] font-extrabold leading-tight"
                  style={{ fontFamily: `var(${preset.primary})` }}
                >
                  {preset.name}
                </span>
                <span
                  className="mt-0.5 block truncate text-[11.5px] text-muted"
                  style={{ fontFamily: `var(${preset.secondary})` }}
                >
                  {preset.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 border-b border-border p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setSlot(tab.id)}
            className={`rounded-lg px-3 py-2 text-left transition-colors ${
              slot === tab.id ? "bg-primary text-white" : "hover:bg-surface"
            }`}
          >
            <span className="block text-[13px] font-bold">{tab.title}</span>
            <span
              className={`block truncate text-[12px] ${slot === tab.id ? "text-white/80" : "text-muted"}`}
            >
              {labelOf(selection[tab.id])} · {tab.hint}
            </span>
          </button>
        ))}
      </div>

      <ul className="flex-1 overflow-y-auto p-2" aria-label={`Písmo — ${slot === "primary" ? "primárne" : "sekundárne"}`}>
        {fontOptions.map((font) => {
          const active = selection[slot] === font.variable;
          return (
            <li key={font.variable}>
              <button
                type="button"
                onClick={() => choose(font.variable)}
                aria-pressed={active}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  active ? "bg-surface ring-2 ring-primary" : "hover:bg-surface"
                }`}
              >
                <span style={{ fontFamily: `var(${font.variable})` }}>
                  <span
                    className={`block leading-tight ${slot === "primary" ? "text-[19px] font-extrabold" : "text-[16px] font-medium"}`}
                  >
                    {font.label}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-muted">
                    Generátor GKS 906 · 400 ml · ľščťžýáíé
                  </span>
                </span>
                {font.note && (
                  <span className="flex-none rounded bg-foreground px-1.5 py-0.5 text-[11px] font-bold text-white">
                    {font.note}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between gap-2 border-t border-border p-2">
        <button
          type="button"
          onClick={() =>
            setSelection((s) => ({
              ...s,
              [slot === "primary" ? "secondary" : "primary"]: s[slot],
            }))
          }
          className="rounded-lg px-3 py-2 text-[13px] font-semibold hover:bg-surface"
        >
          Použiť aj pre {slot === "primary" ? "text" : "nadpisy"}
        </button>
        <button
          type="button"
          onClick={() => setSelection(defaults)}
          className="rounded-lg px-3 py-2 text-[13px] font-semibold text-primary hover:bg-surface"
        >
          Obnoviť
        </button>
      </div>
    </div>
  );
}
