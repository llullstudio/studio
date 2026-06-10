// MapView.jsx — knowledge architecture as three pillars
// Static diagram with click-to-expand nodes
// Expose: Object.assign(window, { MapView })

const PILLARS = [
  {
    id: 'I',
    label: 'Pillar I',
    title: 'Terrain Mapping',
    nodes: [
      { id: '06', label: 'Study 06', title: 'CultureOS', desc: 'Culture as operating system. Scope: civilizational.' },
      { id: '07', label: 'Study 07', title: 'CorporateOS', desc: 'The same firmware in institutional and corporate contexts.' },
      { id: '08', label: 'Study 08', title: 'HumanOS', desc: 'Individual-level scope. Same dispositional axes at personal scale.' },
      { id: '04', label: 'Study 04', title: 'Terrain Study 04', desc: 'Terroir methodology applied.' },
      { id: '05', label: 'Study 05', title: 'Terrain Study 05', desc: 'Terroir methodology applied.' },
      { id: '00', label: 'Study 00', title: 'Terrain Study 00', desc: 'Foundational terrain mapping methodology.' },
      { id: '01', label: 'Study 01', title: 'Terrain Study 01', desc: 'Foundational terrain mapping methodology.' },
    ],
    chain: ['06', '07', '08'],
    chainLabel: 'scope ladder',
  },
  {
    id: 'II',
    label: 'Pillar II',
    title: 'Ideological Threat Diagnostic',
    nodes: [
      { id: '13', label: 'Study 13', title: 'Engine of Utopia', desc: 'Revolutionary collectivist firmware. 14 nodes, 5 eras. Same engine, different target variable.' },
      { id: '03', label: 'Study 03', title: 'WokeOS', desc: 'Dispositional firmware analysis. The ideological operating system and how it propagates.' },
      { id: '09', label: 'Study 09', title: 'Wokefied', desc: 'How institutions and cultures transition into ideological capture.' },
      { id: '02', label: 'Study 02', title: 'The Cuckoo Protocol', desc: 'How franchises eat their own mythic core.', url: 'https://rllull.substack.com/p/the-cuckoo-protocol' },
      { id: '11', label: 'Study 11', title: 'EpistemyOS', desc: 'Epistemic operating system architecture. Foundation for Kernl.' },
      { id: 'kernl', label: 'Instrument', title: 'Kernl', desc: 'Cognitive antivirus. Output of Study 11.', url: 'https://cognitivecellar.com', isInstrument: true },
    ],
    chain: ['13', '03', '09', '02', '11', 'kernl'],
    chainLabel: 'transmission chain',
  },
  {
    id: 'III',
    label: 'Pillar III',
    title: 'Capture Dynamics',
    nodes: [
      { id: '12', label: 'Study 12', title: 'Cascade', desc: 'Capture dynamics in cascade failure mode. Cross-pillar bridge spanning all three methodological pillars.', isBridge: true },
    ],
    chain: ['12'],
    chainLabel: 'cross-pillar bridge',
  },
];

const OUTSIDE = [
  { id: 'lyon', label: 'llUll press', title: 'The Lyon Building', desc: 'Outside the pillars. Print-first imprint. Books that require the object.' },
];

function MapNode({ node, isActive, onClick, inChain }) {
  const [hovered, setHovered] = React.useState(false);
  const isHighlighted = hovered || isActive;
  return React.createElement('div', {
    onClick: () => onClick(node),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      padding: '0.6rem 0.8rem', border: `1px solid ${isActive ? 'var(--amber)' : isHighlighted ? 'var(--amber-dim)' : 'var(--border)'}`,
      background: isActive ? 'var(--amber-faint)' : 'var(--surface)',
      cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s',
      position: 'relative',
    }
  },
    React.createElement('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.12em', color: node.isInstrument ? 'var(--amber)' : 'var(--amber-dim)', textTransform: 'uppercase', marginBottom: '0.2rem' }
    }, node.label),
    React.createElement('div', {
      style: { fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: isHighlighted ? 'var(--text)' : 'var(--text-dim)', lineHeight: 1.3 }
    }, node.title)
  );
}

function MapView() {
  const [active, setActive] = React.useState(null);

  const pillarStyle = {
    flex: 1, borderRight: '1px solid var(--border)', padding: '2rem 1.5rem',
  };
  const pillarLabelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--text-faint)', marginBottom: '0.3rem', display: 'block',
  };
  const pillarTitleStyle = {
    fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-dim)', marginBottom: '1.5rem',
  };
  const chainLabelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--text-faint)', marginTop: '1.2rem', marginBottom: '0.5rem', display: 'block',
    borderTop: '1px solid var(--border)', paddingTop: '0.75rem',
  };
  const arrowStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--amber-dim)',
    textAlign: 'center', padding: '0.2rem 0', userSelect: 'none',
  };

  function handleNode(node) {
    setActive(active?.id === node.id ? null : node);
  }

  // Build chain nodes in order for a pillar
  function renderNodes(pillar) {
    const chainSet = new Set(pillar.chain);
    const nonChain = pillar.nodes.filter(n => !chainSet.has(n.id));
    const chainNodes = pillar.chain.map(id => pillar.nodes.find(n => n.id === id)).filter(Boolean);

    return React.createElement('div', null,
      // Non-chain nodes (if any)
      nonChain.length > 0 && React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' } },
        ...nonChain.map(n => React.createElement(MapNode, { key: n.id, node: n, isActive: active?.id === n.id, onClick: handleNode }))
      ),

      // Chain
      chainNodes.length > 1 && React.createElement('span', { style: chainLabelStyle }, pillar.chainLabel),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '0' } },
        ...chainNodes.flatMap((n, i) => {
          const items = [React.createElement(MapNode, { key: n.id, node: n, isActive: active?.id === n.id, onClick: handleNode, inChain: true })];
          if (i < chainNodes.length - 1) items.push(React.createElement('div', { key: `arrow-${i}`, style: arrowStyle }, '↓'));
          return items;
        })
      )
    );
  }

  return React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
    // Pillar columns
    React.createElement('div', { style: { display: 'flex', flex: 1, borderBottom: '1px solid var(--border)' } },
      ...PILLARS.map((pillar, i) =>
        React.createElement('div', {
          key: pillar.id,
          style: { ...pillarStyle, borderRight: i < PILLARS.length - 1 ? '1px solid var(--border)' : 'none' }
        },
          React.createElement('span', { style: pillarLabelStyle }, pillar.label),
          React.createElement('div', { style: pillarTitleStyle }, pillar.title),
          renderNodes(pillar)
        )
      )
    ),

    // Outside pillars
    React.createElement('div', { style: { padding: '1.5rem 4rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem', alignItems: 'center' } },
      React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-faint)', marginRight: '1rem' } }, 'Outside pillars'),
      ...OUTSIDE.map(n => React.createElement(MapNode, { key: n.id, node: n, isActive: active?.id === n.id, onClick: handleNode }))
    ),

    // Expanded node detail
    active && React.createElement('div', {
      style: { padding: '1.5rem 4rem', background: 'var(--surface)', borderTop: '1px solid var(--amber-dim)' }
    },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
        React.createElement('div', null,
          React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber-dim)', marginBottom: '0.4rem' } }, active.label),
          React.createElement('div', { style: { fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem' } }, active.title),
          React.createElement('p', { style: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.6, maxWidth: 560 } }, active.desc),
          active.url && React.createElement('a', { href: active.url, target: '_blank', rel: 'noopener', style: { fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--amber-dim)', display: 'inline-block', marginTop: '0.75rem', textDecoration: 'none' } }, new URL(active.url).hostname + ' →')
        ),
        React.createElement('button', {
          onClick: () => setActive(null),
          style: { fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', padding: '0.25rem 0' }
        }, '× Close')
      )
    )
  );
}

Object.assign(window, { MapView });
