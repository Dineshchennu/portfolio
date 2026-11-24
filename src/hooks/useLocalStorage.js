import { useEffect, useState } from "react";

// CONCEPT: a custom hook is just a function whose name starts with "use" and that
// calls other hooks. This one works like useState, but remembers the value in the
// browser so it survives a page refresh.
//
// `initialValue` can be a value or a function that returns one.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) return JSON.parse(stored);
    } catch {
      // Storage can be blocked (private mode); fall through to the default.
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write errors; the app still works, it just won't remember.
    }
  }, [key, value]);

  return [value, setValue];
}
