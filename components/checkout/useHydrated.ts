import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** true až v prehliadači po hydratácii — košík z localStorage je vtedy načítaný. */
export function useHydrated() {
  return useSyncExternalStore(noop, () => true, () => false);
}
