import { ReactNode, CSSProperties } from 'react';

/**
 * Card — Frosted Provenance
 *
 * The signature llUll Studio component. A sharp-edged dark surface with
 * a key "finding" always visible above the frost, and body details
 * (description, status, links) blurred until hover.
 *
 * @startingPoint section="Components" subtitle="Dark surface card with frosted-reveal body" viewport="400x280"
 */
export interface CardProps {
  /** Short identifier or label (mono, amber-dim) */
  num?: string;
  /** Primary serif title */
  title?: string;
  /** Domain or subtitle line (mono, text-dim) */
  domain?: string;
  /** The key finding — always visible above the frost */
  finding?: string | ReactNode;
  /** Body content — blurred until hover (Frosted Provenance pattern) */
  children?: ReactNode;
  /** Wrap card in an <a> tag */
  href?: string;
  /** Open href in new tab (sets target="_blank") */
  external?: boolean;
  className?: string;
  style?: CSSProperties;
}

export interface CardDescProps {
  children: ReactNode;
}

export interface CardLinkProps {
  /**
   * Destination URL. OMIT when the parent Card already has href — CardLink
   * then renders a <span> (nested anchors are invalid HTML; the production
   * site uses <span class="card-link"> inside <a class="card">).
   */
  href?: string;
  children: string;
  external?: boolean;
}

export declare function Card(props: CardProps): JSX.Element;
export declare function CardDesc(props: CardDescProps): JSX.Element;
export declare function CardLink(props: CardLinkProps): JSX.Element;
