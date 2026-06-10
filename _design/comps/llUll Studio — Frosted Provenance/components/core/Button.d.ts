import * as React from 'react';

/**
 * Props for the studio button.
 * @startingPoint section="Components" subtitle="Mono bordered button in the studio's chip language" viewport="700x150"
 */
export interface ButtonProps {
  /** 'default' (neutral border), 'amber' (accent border/text), or 'ghost' (borderless). */
  variant?: 'default' | 'amber' | 'ghost';
  /** 'md' (default) or 'sm'. */
  size?: 'sm' | 'md';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  /** HTML button type. Default 'button'. */
  type?: 'button' | 'submit';
}
export declare function Button(props: ButtonProps): JSX.Element;
