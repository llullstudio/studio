import React from 'react';

/**
 * llUll Studio wordmark — Space Grotesk "llUll" in amber + mono suffix in dim.
 * The brand has no graphic logo; the wordmark is always live text.
 */
export function Wordmark({ size = 'md', suffix = 'studio' }) {
  return (
    <div className={`llull-wordmark llull-wordmark--${size}`}>
      llUll{suffix !== false && suffix !== '' && <span className="llull-wordmark-suffix">{suffix}</span>}
    </div>
  );
}
