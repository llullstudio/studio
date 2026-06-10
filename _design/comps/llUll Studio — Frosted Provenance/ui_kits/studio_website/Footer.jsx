// Footer.jsx — llull.studio site footer
// Expose: Object.assign(window, { StudioFooter })

function StudioFooter() {
  const linkStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.15s',
  };
  return React.createElement('footer', {
    style: {
      padding: '2rem 4rem', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }
  },
    React.createElement('p', {
      style: { fontSize: '0.85rem', color: 'var(--text-dim)', maxWidth: 540, lineHeight: 1.55 }
    }, 'R. Llull · St. Augustine, FL · Build the instruments, see who finds them.'),
    React.createElement('nav', { style: { display: 'flex', gap: '1.8rem' } },
      React.createElement('a', { href: 'https://rllull.substack.com', target: '_blank', rel: 'noopener', style: linkStyle }, 'Substack'),
      React.createElement('a', { href: 'https://cognitivecellar.com', target: '_blank', rel: 'noopener', style: linkStyle }, 'cognitivecellar.com')
    )
  );
}

Object.assign(window, { StudioFooter });
