import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export function useDebounceCallback(callback, delay) {
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
}
