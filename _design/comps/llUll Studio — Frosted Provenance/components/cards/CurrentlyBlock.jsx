import React from 'react';

/**
 * CurrentlyBlock — "the live wire". Highlights the studio's one most recent output.
 * Mono amber tag on the left, serif title + italic finding + mono meta on the right.
 */
export function CurrentlyBlock({ tag = 'Currently', title, href, finding, meta, metaLink, metaLinkLabel }) {
  return (
    <div className="llull-currently">
      <span className="llull-currently-tag">{tag}</span>
      <div>
        <a className="llull-currently-title" href={href || '#'} target={href ? '_blank' : undefined} rel="noopener">{title}</a>
        {finding && <p className="llull-currently-finding">{finding}</p>}
        {meta && (
          <p className="llull-currently-meta">
            {meta}{metaLink && <> · <a href={metaLink} target="_blank" rel="noopener">{metaLinkLabel || metaLink} →</a></>}
          </p>
        )}
      </div>
    </div>
  );
}
