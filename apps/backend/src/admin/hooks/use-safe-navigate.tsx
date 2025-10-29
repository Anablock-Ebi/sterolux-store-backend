import { useNavigate } from "react-router-dom";

/**
 * Safe navigate hook that handles Router context issues
 * Falls back to window.location when Router context is not available
 */
export const useSafeNavigate = () => {
  try {
    return useNavigate();
  } catch (error) {
    // Fallback navigation function when Router context is unavailable
    return (path: string) => {
      if (typeof window !== 'undefined') {
        window.location.href = path;
      }
    };
  }
};