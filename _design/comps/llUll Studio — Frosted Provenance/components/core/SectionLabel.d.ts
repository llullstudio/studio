import * as React from 'react';

/** Props for the mono uppercase section label. */
export interface SectionLabelProps {
  /** Label text, e.g. "Imprints". */
  children: React.ReactNode;
  /** Optional inline style overrides. */
  style?: React.CSSProperties;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
