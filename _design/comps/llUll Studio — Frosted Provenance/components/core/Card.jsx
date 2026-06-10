import React from 'react';

/**
 * Card — Frosted Provenance
 *
 * The signature llUll Studio component. A sharp-edged dark surface with
 * a key "finding" always visible, and body details frosted until hover.
 *
 * The card can be a plain div or an <a> element (pass href).
 * Children render inside the frosted body zone.
 */
export function Card({
  num,
  title,
  domain,
  finding,
  children,
  href,
  external = false,
  className = '',
  style = {},
}) {
  const Tag = href ? 'a' : 'div';
  const linkProps = href
    ? {
        href,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
      }
    : {};

  return (
    <Tag
      className={['llull-card', className].filter(Boolean).join(' ')}
      style={style}
      {...linkProps}
    >
      {num && <div className="llull-card-num">{num}</div>}
      {title && <div className="llull-card-title">{title}</div>}
      {domain && <div className="llull-card-domain">{domain}</div>}
      {finding && <p className="llull-card-finding">{finding}</p>}
      {children && <div className="llull-card-body">{children}</div>}
    </Tag>
  );
}

/**
 * CardDesc — body text within a Card's frosted zone
 */
export function CardDesc({ children }) {
  return <p className="llull-card-desc">{children}</p>;
}

/**
 * CardLink — destination URL shown at the bottom of a Card's frosted zone.
 * When the parent Card already IS the anchor (Card href=…), omit href here —
 * it renders a <span>, exactly like the production site (<span class="card-link">
 * inside <a class="card">). Nested anchors are invalid HTML.
 */
export function CardLink({ href, children, external = true }) {
  if (!href) {
    return <span className="llull-card-link">{children}</span>;
  }
  return (
    <a
      className="llull-card-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
