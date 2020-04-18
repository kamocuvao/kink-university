export function useLocalStorage(store, key) {
  if (typeof window !== "undefined" && window && window.localStorage) {
    const json = localStorage.getItem(key);
    if (json) {
      store.set(JSON.parse(json));
    }

    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }
}
