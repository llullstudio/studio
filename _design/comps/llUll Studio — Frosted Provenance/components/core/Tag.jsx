import React from 'react';

/**
 * Tag — Inline category chip (Imprint, Type, Pillar, etc.)
 */
export function Tag({ children, variant = 'default' }) {
  return (
    <span className={`llull-tag${variant !== 'default' ? ' llull-tag--' + variant : ''}`}>
      {children}
    </span>
  );
}
