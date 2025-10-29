import { useSearchParams, useLocation } from "react-router-dom";

type QueryParams<T extends string> = {
  [key in T]: string | undefined;
};

export function useQueryParams<T extends string>(
  keys: T[],
  prefix?: string
): QueryParams<T> {
  // Initialize empty result first
  const result = {} as QueryParams<T>;

  try {
    // Try to use useSearchParams - this will throw if not in Router context
    const [params] = useSearchParams();

    keys.forEach((key) => {
      const prefixedKey = prefix ? `${prefix}_${key}` : key;
      const value = params.get(prefixedKey) || undefined;
      result[key] = value;
    });
  } catch (error) {
    // If we're not in a Router context, fall back to URL parsing
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      
      keys.forEach((key) => {
        const prefixedKey = prefix ? `${prefix}_${key}` : key;
        const value = urlParams.get(prefixedKey) || undefined;
        result[key] = value;
      });
    } else {
      // Server-side or no window - return empty values
      keys.forEach((key) => {
        result[key] = undefined;
      });
    }
  }

  return result;
}
