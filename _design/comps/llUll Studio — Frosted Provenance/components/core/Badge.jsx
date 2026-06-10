import React from 'react';

/**
 * Badge — Status indicator.
 * Mono, uppercase, bordered. Semantic variants: active, live, dev, coming.
 */
export function Badge({ children, variant = 'default' }) {
  return (
    <span className={`llull-badge llull-badge--${variant}`}>
      {children}
    </span>
  );
}
