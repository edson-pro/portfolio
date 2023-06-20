import { getContext, setContext } from "svelte";

const key = "theme";

export function getThemeStore() {
  return getContext(key);
}

export function setThemeStore(store) {
  setContext(key, store);
}
