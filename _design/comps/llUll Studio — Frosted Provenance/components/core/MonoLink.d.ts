import * as React from 'react';

/** Props for the mono arrow link. */
export interface MonoLinkProps {
  /** Destination URL. */
  href?: string;
  /** Link text (arrow appended automatically). */
  children: React.ReactNode;
  /** e.g. '_blank' for outbound links. */
  target?: string;
}
export declare function MonoLink(props: MonoLinkProps): JSX.Element;
