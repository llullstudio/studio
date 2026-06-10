import React from 'react';

/** Mono uppercase letterspaced section label (e.g. "Imprints", "Instruments"). */
export function SectionLabel({ children, style }) {
  return <div className="llull-section-label" style={style}>{children}</div>;
}
