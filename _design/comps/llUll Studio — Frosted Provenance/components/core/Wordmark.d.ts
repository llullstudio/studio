/** Props for the llUll Studio text wordmark. */
export interface WordmarkProps {
  /** Size step. Default 'md' (1.1rem — site header size). */
  size?: 'sm' | 'md' | 'lg';
  /** Imprint suffix after "llUll" — 'studio' (default), 'press', or false to hide. */
  suffix?: string | false;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
