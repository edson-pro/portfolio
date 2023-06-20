import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { setThemeStore } from "./context";

export const themes = ["light", "dark", "system"];

export const defaultLabels = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export interface Config {
  key: string;
}

export function createThemeSwitcher() {
  let theme = "system";

  if (browser) {
    const saved = localStorage.theme;
    if (saved === "light" || saved === "dark") {
      theme = saved;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  const { subscribe, set } = writable(theme);

  function setTheme(value) {
    // only update if valid, and it's changed
    if (themes.includes(value) && value !== theme) {
      theme = value;
      set(theme);
    }
  }

  const store = {
    subscribe,
    setTheme,
  };

  setThemeStore(store);

  return store;
}
