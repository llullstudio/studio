// Header.jsx — llull.studio site header
// Expose: Object.assign(window, { StudioHeader })

function StudioHeader({ view, onNavigate }) {
  const views = ['lobby', 'gallery', 'map'];
  const meta = {
    lobby:   { h1: null, tagline: 'The work is the instrument, not the opinion.' },
    gallery: { h1: 'Gallery', tagline: 'All studio output, browsable and filterable.' },
    map:     { h1: 'Map', tagline: 'The intellectual architecture made visible.' },
  };
  const curr = meta[view] || meta.lobby;

  return React.createElement('header', {
    style: {
      padding: '4rem 4rem 3rem', borderBottom: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    }
  },
    React.createElement('div', null,
      React.createElement('div', {
        style: {
          fontFamily: 'var(--font-grotesk)', fontSize: '1.1rem', fontWeight: 600,
          letterSpacing: '0.12em', color: 'var(--amber)', marginBottom: '1.4rem',
          cursor: 'pointer', display: 'inline-flex', alignItems: 'baseline', gap: '0.3em',
        },
        onClick: () => onNavigate('lobby'),
      },
        'llUll',
        React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontWeight: 400, color: 'var(--text-dim)' } }, 'studio')
      ),
      view === 'lobby'
        ? React.createElement('h1', {
            style: { fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', maxWidth: 640, marginBottom: '1rem' }
          },
            'Instruments for ',
            React.createElement('em', { style: { fontStyle: 'italic', color: 'var(--amber)' } }, 'clarity.')
          )
        : React.createElement('h2', {
            style: { fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text)', marginBottom: '0.75rem' }
          }, curr.h1),
      React.createElement('p', {
        style: { fontSize: '1.05rem', color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.6 }
      }, curr.tagline)
    ),
    React.createElement('nav', {
      style: { display: 'flex', gap: '2.2rem', paddingTop: '0.15rem', flexShrink: 0 }
    },
      ...views.map(v =>
        React.createElement('button', {
          key: v,
          onClick: () => onNavigate(v),
          style: {
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
            color: view === v ? 'var(--amber)' : 'var(--text-faint)', transition: 'color 0.15s',
            padding: 0,
          },
        }, v)
      ),
      React.createElement('a', {
        href: 'https://rllull.substack.com', target: '_blank', rel: 'noopener',
        style: { fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)', textDecoration: 'none', transition: 'color 0.15s' },
      }, 'Substack')
    )
  );
}

Object.assign(window, { StudioHeader });
