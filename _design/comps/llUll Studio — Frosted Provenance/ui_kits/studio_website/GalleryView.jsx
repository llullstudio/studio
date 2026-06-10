// GalleryView.jsx — filterable catalog of all studio output
// Expose: Object.assign(window, { GalleryView })

const CATALOG = [
  { id: '13', study: 'Study 13', title: 'Engine of Utopia', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Revolutionary collectivist firmware traced from 18th-century France through its modern instantiations. 14 nodes, 5 eras. Same engine, different target variable.' },
  { id: '12', study: 'Study 12', title: 'Cascade', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Cross-pillar bridge. Capture dynamics in cascade failure mode. Spans all three methodological pillars.' },
  { id: '11', study: 'Study 11', title: 'EpistemyOS', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Epistemic operating system architecture. The scored structural foundation for Kernl.' },
  { id: '09', study: 'Study 09', title: 'Wokefied', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Mechanism study: how institutions and cultures transition into ideological capture.' },
  { id: '08', study: 'Study 08', title: 'HumanOS', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'The same dispositional axes at individual scale. Scope: the person.' },
  { id: '07', study: 'Study 07', title: 'CorporateOS', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'The same firmware running in institutional and corporate contexts.' },
  { id: '06', study: 'Study 06', title: 'CultureOS', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Culture as operating system. Scope: civilizational. The scope ladder begins here.' },
  { id: '03', study: 'Study 03', title: 'WokeOS', imprint: 'Cognitive Cellar', type: 'Study', status: 'live', desc: 'Dispositional firmware analysis. The ideological operating system and how it propagates through institutional tissue.' },
  { id: '02', study: 'Study 02', title: 'The Cuckoo Protocol', imprint: 'Cognitive Cellar', type: 'Article', status: 'live', desc: 'How franchises eat their own mythic core — and teach the audience not to trust the uniform.', url: 'https://rllull.substack.com/p/the-cuckoo-protocol' },
  { id: 'kernl', study: null, title: 'Kernl', imprint: 'Cognitive Cellar', type: 'Instrument', status: 'active', desc: 'Cognitive antivirus. Real-time epistemic threat detection. Strictly neutral: fires on left, right, and center equally.', url: 'https://cognitivecellar.com' },
  { id: 'eou-inst', study: null, title: 'Engine of Utopia', imprint: 'Cognitive Cellar', type: 'Instrument', status: 'dev', desc: 'The scored transmission map as interactive instrument. 14 nodes, 5 eras, navigable.' },
  { id: 'lastbackup', study: null, title: 'The Last Backup', imprint: 'Cognitive Cellar', type: 'Instrument', status: 'dev', desc: 'High-fidelity cognitive encoding. HAL Stack 0–6. Security A/B/C. The unexplored middle ground.' },
  { id: 'collector', study: null, title: 'The Collector', imprint: 'Cognitive Cellar', type: 'Instrument', status: 'coming', desc: 'Validation-gated knowledge ingestion. User-authored dispositional axes score what survives.' },
  { id: 'lyon', study: null, title: 'The Lyon Building', imprint: 'llUll press', type: 'Book', status: 'coming', desc: 'Titles that reward slow reading and physical form. Print-first. Books that require the object.' },
];

const STATUS_LABEL = { live: 'Published', active: 'Active', dev: 'In Development', coming: 'Coming' };
const STATUS_VARIANT = { live: 'live', active: 'active', dev: 'dev', coming: 'coming' };

const ALL = 'All';
const IMPRINTS = [ALL, 'Cognitive Cellar', 'llUll press', 'studio oi'];
const TYPES    = [ALL, 'Article', 'Study', 'Instrument', 'Book'];
const STATUSES = [ALL, 'Active', 'Published', 'In Development', 'Coming'];

function GalleryView() {
  const { Card, CardDesc, CardLink, Badge, SectionLabel } = window.DS;
  const [imprint, setImprint] = React.useState(ALL);
  const [type, setType]       = React.useState(ALL);
  const [status, setStatus]   = React.useState(ALL);

  const filtered = CATALOG.filter(item => {
    const imprintOk = imprint === ALL || item.imprint === imprint;
    const typeOk    = type    === ALL || item.type    === type;
    const statusOk  = status  === ALL || STATUS_LABEL[item.status] === status;
    return imprintOk && typeOk && statusOk;
  });

  const filterBarStyle = {
    padding: '1.5rem 4rem', borderBottom: '1px solid var(--border)',
    display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap',
  };
  const groupStyle = { display: 'flex', gap: '0.5rem', alignItems: 'center' };
  const groupLabelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.18em',
    textTransform: 'uppercase', color: 'var(--text-faint)', marginRight: '0.25rem',
  };

  function FilterBtn({ label, active, onClick }) {
    return React.createElement('button', {
      onClick,
      style: {
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
        textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
        color: active ? 'var(--amber)' : 'var(--text-faint)', transition: 'color 0.15s',
        padding: '0.2rem 0',
        borderBottom: active ? '1px solid var(--amber-dim)' : '1px solid transparent',
      },
    }, label);
  }

  return React.createElement('main', { style: { flex: 1 } },
    // Filter bar
    React.createElement('div', { style: filterBarStyle },
      React.createElement('div', { style: groupStyle },
        React.createElement('span', { style: groupLabelStyle }, 'Imprint'),
        ...IMPRINTS.map(v => React.createElement(FilterBtn, { key: v, label: v, active: imprint === v, onClick: () => setImprint(v) }))
      ),
      React.createElement('div', { style: { width: 1, height: 16, background: 'var(--border)' } }),
      React.createElement('div', { style: groupStyle },
        React.createElement('span', { style: groupLabelStyle }, 'Type'),
        ...TYPES.map(v => React.createElement(FilterBtn, { key: v, label: v, active: type === v, onClick: () => setType(v) }))
      ),
      React.createElement('div', { style: { width: 1, height: 16, background: 'var(--border)' } }),
      React.createElement('div', { style: groupStyle },
        React.createElement('span', { style: groupLabelStyle }, 'Status'),
        ...STATUSES.map(v => React.createElement(FilterBtn, { key: v, label: v, active: status === v, onClick: () => setStatus(v) }))
      )
    ),

    // Card grid
    React.createElement('section', { style: { padding: '3rem 4rem' } },
      filtered.length === 0
        ? React.createElement('p', { style: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-faint)', fontSize: '1rem' } }, 'No results.')
        : React.createElement('div', {
            style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }
          },
          ...filtered.map(item =>
            React.createElement(Card, {
              key: item.id,
              num: item.study || item.type,
              title: item.title,
              domain: item.imprint,
              finding: item.desc.split('.')[0] + '.',
              href: item.url || undefined,
              external: !!item.url,
            },
              React.createElement(CardDesc, null, item.desc),
              React.createElement(Badge, { variant: STATUS_VARIANT[item.status] }, STATUS_LABEL[item.status]),
              item.url && React.createElement(CardLink, null, new URL(item.url).hostname)
            )
          )
        )
    )
  );
}

Object.assign(window, { GalleryView });
