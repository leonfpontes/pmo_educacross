'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';

/**
 * Attempts to read the current pathname using Next.js App Router's {@link usePathname}.
 * When rendered inside the legacy Pages Router the hook throws an error because the
 * navigation context is not available. We catch that exception and fall back to
 * returning `null`, allowing consumers to handle client-side detection (for example
 * through `window.location`).
 *
 * A development-only warning is logged the first time the fallback is triggered to
 * help surface unexpected usages while avoiding hydration issues caused by
 * conditionally calling hooks.
 *
 * @returns {string | null}
 */
export function useSafePathname() {
  const hasWarnedRef = useRef(false);

  try {
    return usePathname();
  } catch (error) {
    if (process.env.NODE_ENV !== 'production' && !hasWarnedRef.current) {
      // eslint-disable-next-line no-console
      console.warn(
        'useSafePathname: falling back to window.location because usePathname is unavailable.',
        error
      );
      hasWarnedRef.current = true;
    }

    return null;
  }
}

export default useSafePathname;
