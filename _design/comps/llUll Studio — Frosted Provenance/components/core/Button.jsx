import React from 'react';

/**
 * Button — extrapolated from the studio's chip/border language
 * (the live site has no buttons). Square corners, mono uppercase.
 * variant: 'default' (neutral border) | 'amber' (accent) | 'ghost' (borderless)
 */
export function Button({ variant = 'default', size = 'md', children, onClick, disabled, type = 'button' }) {
  const cls = [
    'llull-btn',
    variant !== 'default' && `llull-btn--${variant}`,
    size === 'sm' && 'llull-btn--sm',
  ].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
