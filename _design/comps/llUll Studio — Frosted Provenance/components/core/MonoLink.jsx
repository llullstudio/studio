import React from 'react';

/** Mono metadata link with trailing amber arrow (→). Used for outbound links on cards and footers. */
export function MonoLink({ href = '#', children, target }) {
  return (
    <a className="llull-mono-link" href={href} target={target} rel={target === '_blank' ? 'noopener' : undefined}>
      {children}
    </a>
  );
}
