import * as React from 'react';

/** Props for the "Currently" highlight block. */
export interface CurrentlyBlockProps {
  /** Left-column mono tag. Default 'Currently'. */
  tag?: string;
  /** Serif title of the featured piece. */
  title: string;
  /** Link for the title. */
  href?: string;
  /** Italic serif one-line finding. */
  finding?: string;
  /** Mono metadata prefix, e.g. "Study 02 · Cognitive Cellar". */
  meta?: string;
  /** Outbound URL appended to meta. */
  metaLink?: string;
  /** Label for the meta link. */
  metaLinkLabel?: string;
}
export declare function CurrentlyBlock(props: CurrentlyBlockProps): JSX.Element;
