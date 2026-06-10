/**
 * Badge — Mono status indicator
 *
 * Sharp-edged, uppercase, bordered status pill.
 * Four semantic color variants matching the studio's status vocabulary.
 */
export interface BadgeProps {
  children: string;
  /**
   * Semantic status variant
   * - `active`  — amber fg/bd (currently running)
   * - `live`    — green fg/bd (publicly published)
   * - `dev`     — amber-dim fg, faint bd (in development)
   * - `coming`  — faint fg/bd (future / unstarted)
   * - `default` — dim fg, border (neutral label)
   */
  variant?: 'active' | 'live' | 'dev' | 'coming' | 'default';
}

export declare function Badge(props: BadgeProps): JSX.Element;
