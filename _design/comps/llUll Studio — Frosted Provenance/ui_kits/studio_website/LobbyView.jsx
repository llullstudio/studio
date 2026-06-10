// LobbyView.jsx — llull.studio home page
// Expose: Object.assign(window, { LobbyView })

function LobbyView() {
  const { Card, CardDesc, CardLink, Badge, SectionLabel } = window.DS;

  const sectionStyle = { padding: '3rem 4rem', borderBottom: '1px solid var(--border)' };
  const gridStyle3 = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' };
  const gridStyle2 = { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' };

  return React.createElement('main', { style: { flex: 1 } },

    // Currently
    React.createElement('section', { style: sectionStyle },
      React.createElement('div', { style: { display: 'flex', gap: '3rem', alignItems: 'flex-start' } },
        React.createElement('span', {
          style: { fontFamily: 'var(--font-mono)', fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--amber)', whiteSpace: 'nowrap', paddingTop: '0.35rem', minWidth: '5.5rem' }
        }, 'Currently'),
        React.createElement('div', null,
          React.createElement('a', {
            href: 'https://rllull.substack.com/p/the-cuckoo-protocol', target: '_blank', rel: 'noopener',
            style: { fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.25, marginBottom: '0.5rem', textDecoration: 'none', display: 'block', transition: 'color 0.15s' },
          }, 'The Cuckoo Protocol'),
          React.createElement('p', {
            style: { fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '0.9rem', maxWidth: 560 }
          }, 'How franchises eat their own mythic core — and teach the audience not to trust the uniform.'),
          React.createElement('p', {
            style: { fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-faint)', letterSpacing: '0.08em' }
          },
            'Study 02 · Cognitive Cellar · ',
            React.createElement('a', { href: 'https://rllull.substack.com/p/the-cuckoo-protocol', target: '_blank', rel: 'noopener', style: { color: 'var(--amber-dim)', textDecoration: 'none', transition: 'color 0.15s' } }, 'rllull.substack.com →')
          )
        )
      )
    ),

    // Imprints
    React.createElement('section', { style: sectionStyle },
      React.createElement(SectionLabel, null, 'Imprints'),
      React.createElement('div', { style: gridStyle3 },
        React.createElement(Card, { num: 'I', title: 'Cognitive Cellar', domain: 'Analytical instruments · R. Llull', finding: 'The instrument doesn\'t care what you believe. It scores what you do.', href: 'https://rllull.substack.com', external: true },
          React.createElement(CardDesc, null, 'Scored studies, dispositional profiling, and the Terroir methodology. Applied to AI systems, ideological structures, institutions, and cultures.'),
          React.createElement(Badge, { variant: 'active' }, 'Active'),
          React.createElement(CardLink, null, 'rllull.substack.com')
        ),
        React.createElement(Card, { num: 'II', title: 'llUll press', domain: 'Print publishing', finding: 'Titles that reward slow reading and physical form.' },
          React.createElement(CardDesc, null, 'Print-first imprint. Heritage projects, limited editions, posters. The Lyon Building. Books that require the object.'),
          React.createElement(Badge, { variant: 'coming' }, 'Coming')
        ),
        React.createElement(Card, { num: 'III', title: 'studio oi', domain: 'Image · video · photography · design', finding: 'Same precision, different register.' },
          React.createElement(CardDesc, null, 'Still image, moving image, and creative experiments. Visual research running parallel to the analytical work.'),
          React.createElement(Badge, { variant: 'coming' }, 'Coming')
        )
      )
    ),

    // Instruments
    React.createElement('section', { style: { ...sectionStyle, borderBottom: 'none' } },
      React.createElement(SectionLabel, null, 'Instruments'),
      React.createElement('div', { style: gridStyle2 },
        React.createElement(Card, { num: 'Engine of Utopia', title: 'Ideological Transmission Map', domain: 'Revolutionary collectivist firmware · 14 nodes · 5 eras', finding: 'The mass death is not the failure state.' },
          React.createElement(CardDesc, null, 'A scored transmission map tracing the same epistemic engine from 18th-century France through its modern instantiations. Same engine, different target variable.'),
          React.createElement(Badge, { variant: 'dev' }, 'In Development')
        ),
        React.createElement(Card, { num: 'Kernl', title: 'Cognitive Antivirus', domain: 'Real-time epistemic threat detection', finding: 'Detects structural manipulation regardless of truth value.', href: 'https://cognitivecellar.com', external: true },
          React.createElement(CardDesc, null, 'Scans content for structural manipulation mechanisms and extracts the factual payload. Does not fact-check. Strictly neutral: fires on left, right, and center equally.'),
          React.createElement(Badge, { variant: 'active' }, 'Active Build'),
          React.createElement(CardLink, null, 'cognitivecellar.com')
        ),
        React.createElement(Card, { num: 'The Last Backup', title: 'High-Fidelity Cognitive Encoding', domain: 'Framework · Three-axis architecture · HAL Stack', finding: 'Between the chatbot that sounds like your father and the connectome upload that is your father lies unexplored middle ground.' },
          React.createElement(CardDesc, null, 'A modular encoding system for the generative machinery of a mind — not what someone says, but how the cognition that produces the speech works.'),
          React.createElement(Badge, { variant: 'dev' }, 'In Development')
        ),
        React.createElement(Card, { num: 'The Collector', title: 'Dispositional Knowledge Filter', domain: 'Personal knowledge acquisition · Validation-gated', finding: 'The bottleneck being solved is saving too much, not finding too little.' },
          React.createElement(CardDesc, null, 'A validation-gated knowledge ingestion system. Most captures are discarded. User-authored dispositional axes score what survives.'),
          React.createElement(Badge, { variant: 'coming' }, 'Coming')
        )
      )
    )
  );
}

Object.assign(window, { LobbyView });
