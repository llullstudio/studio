/**
 * Tag — Inline category label
 *
 * Small mono bordered chip for imprint names, content types, pillar labels.
 */
export interface TagProps {
  children: string;
  /**
   * Visual variant
   * - `default` — faint gray, dim border
   * - `amber`   — amber-dim text, amber-faint border
   */
  variant?: 'default' | 'amber';
}

export declare function Tag(props: TagProps): JSX.Element;
