/* @ds-bundle: {"format":3,"namespace":"LlUllStudioFrostedProvenance_e6bb14","components":[{"name":"CurrentlyBlock","sourcePath":"components/cards/CurrentlyBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardDesc","sourcePath":"components/core/Card.jsx"},{"name":"CardLink","sourcePath":"components/core/Card.jsx"},{"name":"MonoLink","sourcePath":"components/core/MonoLink.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"}],"sourceHashes":{"components/cards/CurrentlyBlock.jsx":"94473d373075","components/core/Badge.jsx":"cfb0cbea019a","components/core/Button.jsx":"3dc62d9fa420","components/core/Card.jsx":"d6ee218d191e","components/core/MonoLink.jsx":"7789ab69ff07","components/core/SectionLabel.jsx":"a3d71ed64bbf","components/core/Tag.jsx":"91b69ff25f5e","components/core/Wordmark.jsx":"fa0f064f7336","tweaks-panel.jsx":"6591467622ed","ui_kits/studio_website/Footer.jsx":"bf67eedb2a09","ui_kits/studio_website/GalleryView.jsx":"9f6ac608e1ee","ui_kits/studio_website/Header.jsx":"f2b3ace726f7","ui_kits/studio_website/LobbyView.jsx":"66f303918d09","ui_kits/studio_website/MapView.jsx":"5a82025c2b37"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LlUllStudioFrostedProvenance_e6bb14 = window.LlUllStudioFrostedProvenance_e6bb14 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/CurrentlyBlock.jsx
try { (() => {
/**
 * CurrentlyBlock — "the live wire". Highlights the studio's one most recent output.
 * Mono amber tag on the left, serif title + italic finding + mono meta on the right.
 */
function CurrentlyBlock({
  tag = 'Currently',
  title,
  href,
  finding,
  meta,
  metaLink,
  metaLinkLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "llull-currently"
  }, /*#__PURE__*/React.createElement("span", {
    className: "llull-currently-tag"
  }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "llull-currently-title",
    href: href || '#',
    target: href ? '_blank' : undefined,
    rel: "noopener"
  }, title), finding && /*#__PURE__*/React.createElement("p", {
    className: "llull-currently-finding"
  }, finding), meta && /*#__PURE__*/React.createElement("p", {
    className: "llull-currently-meta"
  }, meta, metaLink && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: metaLink,
    target: "_blank",
    rel: "noopener"
  }, metaLinkLabel || metaLink, " \u2192")))));
}
Object.assign(__ds_scope, { CurrentlyBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CurrentlyBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — Status indicator.
 * Mono, uppercase, bordered. Semantic variants: active, live, dev, coming.
 */
function Badge({
  children,
  variant = 'default'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `llull-badge llull-badge--${variant}`
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — extrapolated from the studio's chip/border language
 * (the live site has no buttons). Square corners, mono uppercase.
 * variant: 'default' (neutral border) | 'amber' (accent) | 'ghost' (borderless)
 */
function Button({
  variant = 'default',
  size = 'md',
  children,
  onClick,
  disabled,
  type = 'button'
}) {
  const cls = ['llull-btn', variant !== 'default' && `llull-btn--${variant}`, size === 'sm' && 'llull-btn--sm'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick,
    disabled: disabled
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — Frosted Provenance
 *
 * The signature llUll Studio component. A sharp-edged dark surface with
 * a key "finding" always visible, and body details frosted until hover.
 *
 * The card can be a plain div or an <a> element (pass href).
 * Children render inside the frosted body zone.
 */
function Card({
  num,
  title,
  domain,
  finding,
  children,
  href,
  external = false,
  className = '',
  style = {}
}) {
  const Tag = href ? 'a' : 'div';
  const linkProps = href ? {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['llull-card', className].filter(Boolean).join(' '),
    style: style
  }, linkProps), num && /*#__PURE__*/React.createElement("div", {
    className: "llull-card-num"
  }, num), title && /*#__PURE__*/React.createElement("div", {
    className: "llull-card-title"
  }, title), domain && /*#__PURE__*/React.createElement("div", {
    className: "llull-card-domain"
  }, domain), finding && /*#__PURE__*/React.createElement("p", {
    className: "llull-card-finding"
  }, finding), children && /*#__PURE__*/React.createElement("div", {
    className: "llull-card-body"
  }, children));
}

/**
 * CardDesc — body text within a Card's frosted zone
 */
function CardDesc({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "llull-card-desc"
  }, children);
}

/**
 * CardLink — destination URL shown at the bottom of a Card's frosted zone.
 * When the parent Card already IS the anchor (Card href=…), omit href here —
 * it renders a <span>, exactly like the production site (<span class="card-link">
 * inside <a class="card">). Nested anchors are invalid HTML.
 */
function CardLink({
  href,
  children,
  external = true
}) {
  if (!href) {
    return /*#__PURE__*/React.createElement("span", {
      className: "llull-card-link"
    }, children);
  }
  return /*#__PURE__*/React.createElement("a", {
    className: "llull-card-link",
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, children);
}
Object.assign(__ds_scope, { Card, CardDesc, CardLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/MonoLink.jsx
try { (() => {
/** Mono metadata link with trailing amber arrow (→). Used for outbound links on cards and footers. */
function MonoLink({
  href = '#',
  children,
  target
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "llull-mono-link",
    href: href,
    target: target,
    rel: target === '_blank' ? 'noopener' : undefined
  }, children);
}
Object.assign(__ds_scope, { MonoLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MonoLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/** Mono uppercase letterspaced section label (e.g. "Imprints", "Instruments"). */
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "llull-section-label",
    style: style
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — Inline category chip (Imprint, Type, Pillar, etc.)
 */
function Tag({
  children,
  variant = 'default'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `llull-tag${variant !== 'default' ? ' llull-tag--' + variant : ''}`
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/**
 * llUll Studio wordmark — Space Grotesk "llUll" in amber + mono suffix in dim.
 * The brand has no graphic logo; the wordmark is always live text.
 */
function Wordmark({
  size = 'md',
  suffix = 'studio'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `llull-wordmark llull-wordmark--${size}`
  }, "llUll", suffix !== false && suffix !== '' && /*#__PURE__*/React.createElement("span", {
    className: "llull-wordmark-suffix"
  }, suffix));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_website/Footer.jsx
try { (() => {
// Footer.jsx — llull.studio site footer
// Expose: Object.assign(window, { StudioFooter })

function StudioFooter() {
  const linkStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
    textDecoration: 'none',
    transition: 'color 0.15s'
  };
  return React.createElement('footer', {
    style: {
      padding: '2rem 4rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }
  }, React.createElement('p', {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-dim)',
      maxWidth: 540,
      lineHeight: 1.55
    }
  }, 'R. Llull · St. Augustine, FL · Build the instruments, see who finds them.'), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: '1.8rem'
    }
  }, React.createElement('a', {
    href: 'https://rllull.substack.com',
    target: '_blank',
    rel: 'noopener',
    style: linkStyle
  }, 'Substack'), React.createElement('a', {
    href: 'https://cognitivecellar.com',
    target: '_blank',
    rel: 'noopener',
    style: linkStyle
  }, 'cognitivecellar.com')));
}
Object.assign(window, {
  StudioFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_website/GalleryView.jsx
try { (() => {
// GalleryView.jsx — filterable catalog of all studio output
// Expose: Object.assign(window, { GalleryView })

const CATALOG = [{
  id: '13',
  study: 'Study 13',
  title: 'Engine of Utopia',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Revolutionary collectivist firmware traced from 18th-century France through its modern instantiations. 14 nodes, 5 eras. Same engine, different target variable.'
}, {
  id: '12',
  study: 'Study 12',
  title: 'Cascade',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Cross-pillar bridge. Capture dynamics in cascade failure mode. Spans all three methodological pillars.'
}, {
  id: '11',
  study: 'Study 11',
  title: 'EpistemyOS',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Epistemic operating system architecture. The scored structural foundation for Kernl.'
}, {
  id: '09',
  study: 'Study 09',
  title: 'Wokefied',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Mechanism study: how institutions and cultures transition into ideological capture.'
}, {
  id: '08',
  study: 'Study 08',
  title: 'HumanOS',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'The same dispositional axes at individual scale. Scope: the person.'
}, {
  id: '07',
  study: 'Study 07',
  title: 'CorporateOS',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'The same firmware running in institutional and corporate contexts.'
}, {
  id: '06',
  study: 'Study 06',
  title: 'CultureOS',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Culture as operating system. Scope: civilizational. The scope ladder begins here.'
}, {
  id: '03',
  study: 'Study 03',
  title: 'WokeOS',
  imprint: 'Cognitive Cellar',
  type: 'Study',
  status: 'live',
  desc: 'Dispositional firmware analysis. The ideological operating system and how it propagates through institutional tissue.'
}, {
  id: '02',
  study: 'Study 02',
  title: 'The Cuckoo Protocol',
  imprint: 'Cognitive Cellar',
  type: 'Article',
  status: 'live',
  desc: 'How franchises eat their own mythic core — and teach the audience not to trust the uniform.',
  url: 'https://rllull.substack.com/p/the-cuckoo-protocol'
}, {
  id: 'kernl',
  study: null,
  title: 'Kernl',
  imprint: 'Cognitive Cellar',
  type: 'Instrument',
  status: 'active',
  desc: 'Cognitive antivirus. Real-time epistemic threat detection. Strictly neutral: fires on left, right, and center equally.',
  url: 'https://cognitivecellar.com'
}, {
  id: 'eou-inst',
  study: null,
  title: 'Engine of Utopia',
  imprint: 'Cognitive Cellar',
  type: 'Instrument',
  status: 'dev',
  desc: 'The scored transmission map as interactive instrument. 14 nodes, 5 eras, navigable.'
}, {
  id: 'lastbackup',
  study: null,
  title: 'The Last Backup',
  imprint: 'Cognitive Cellar',
  type: 'Instrument',
  status: 'dev',
  desc: 'High-fidelity cognitive encoding. HAL Stack 0–6. Security A/B/C. The unexplored middle ground.'
}, {
  id: 'collector',
  study: null,
  title: 'The Collector',
  imprint: 'Cognitive Cellar',
  type: 'Instrument',
  status: 'coming',
  desc: 'Validation-gated knowledge ingestion. User-authored dispositional axes score what survives.'
}, {
  id: 'lyon',
  study: null,
  title: 'The Lyon Building',
  imprint: 'llUll press',
  type: 'Book',
  status: 'coming',
  desc: 'Titles that reward slow reading and physical form. Print-first. Books that require the object.'
}];
const STATUS_LABEL = {
  live: 'Published',
  active: 'Active',
  dev: 'In Development',
  coming: 'Coming'
};
const STATUS_VARIANT = {
  live: 'live',
  active: 'active',
  dev: 'dev',
  coming: 'coming'
};
const ALL = 'All';
const IMPRINTS = [ALL, 'Cognitive Cellar', 'llUll press', 'studio oi'];
const TYPES = [ALL, 'Article', 'Study', 'Instrument', 'Book'];
const STATUSES = [ALL, 'Active', 'Published', 'In Development', 'Coming'];
function GalleryView() {
  const {
    Card,
    CardDesc,
    CardLink,
    Badge,
    SectionLabel
  } = window.DS;
  const [imprint, setImprint] = React.useState(ALL);
  const [type, setType] = React.useState(ALL);
  const [status, setStatus] = React.useState(ALL);
  const filtered = CATALOG.filter(item => {
    const imprintOk = imprint === ALL || item.imprint === imprint;
    const typeOk = type === ALL || item.type === type;
    const statusOk = status === ALL || STATUS_LABEL[item.status] === status;
    return imprintOk && typeOk && statusOk;
  });
  const filterBarStyle = {
    padding: '1.5rem 4rem',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  };
  const groupStyle = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  };
  const groupLabelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.58rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--text-faint)',
    marginRight: '0.25rem'
  };
  function FilterBtn({
    label,
    active,
    onClick
  }) {
    return React.createElement('button', {
      onClick,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: active ? 'var(--amber)' : 'var(--text-faint)',
        transition: 'color 0.15s',
        padding: '0.2rem 0',
        borderBottom: active ? '1px solid var(--amber-dim)' : '1px solid transparent'
      }
    }, label);
  }
  return React.createElement('main', {
    style: {
      flex: 1
    }
  },
  // Filter bar
  React.createElement('div', {
    style: filterBarStyle
  }, React.createElement('div', {
    style: groupStyle
  }, React.createElement('span', {
    style: groupLabelStyle
  }, 'Imprint'), ...IMPRINTS.map(v => React.createElement(FilterBtn, {
    key: v,
    label: v,
    active: imprint === v,
    onClick: () => setImprint(v)
  }))), React.createElement('div', {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border)'
    }
  }), React.createElement('div', {
    style: groupStyle
  }, React.createElement('span', {
    style: groupLabelStyle
  }, 'Type'), ...TYPES.map(v => React.createElement(FilterBtn, {
    key: v,
    label: v,
    active: type === v,
    onClick: () => setType(v)
  }))), React.createElement('div', {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border)'
    }
  }), React.createElement('div', {
    style: groupStyle
  }, React.createElement('span', {
    style: groupLabelStyle
  }, 'Status'), ...STATUSES.map(v => React.createElement(FilterBtn, {
    key: v,
    label: v,
    active: status === v,
    onClick: () => setStatus(v)
  })))),
  // Card grid
  React.createElement('section', {
    style: {
      padding: '3rem 4rem'
    }
  }, filtered.length === 0 ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--text-faint)',
      fontSize: '1rem'
    }
  }, 'No results.') : React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1.5rem'
    }
  }, ...filtered.map(item => React.createElement(Card, {
    key: item.id,
    num: item.study || item.type,
    title: item.title,
    domain: item.imprint,
    finding: item.desc.split('.')[0] + '.',
    href: item.url || undefined,
    external: !!item.url
  }, React.createElement(CardDesc, null, item.desc), React.createElement(Badge, {
    variant: STATUS_VARIANT[item.status]
  }, STATUS_LABEL[item.status]), item.url && React.createElement(CardLink, null, new URL(item.url).hostname))))));
}
Object.assign(window, {
  GalleryView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_website/GalleryView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_website/Header.jsx
try { (() => {
// Header.jsx — llull.studio site header
// Expose: Object.assign(window, { StudioHeader })

function StudioHeader({
  view,
  onNavigate
}) {
  const views = ['lobby', 'gallery', 'map'];
  const meta = {
    lobby: {
      h1: null,
      tagline: 'The work is the instrument, not the opinion.'
    },
    gallery: {
      h1: 'Gallery',
      tagline: 'All studio output, browsable and filterable.'
    },
    map: {
      h1: 'Map',
      tagline: 'The intellectual architecture made visible.'
    }
  };
  const curr = meta[view] || meta.lobby;
  return React.createElement('header', {
    style: {
      padding: '4rem 4rem 3rem',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontSize: '1.1rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: 'var(--amber)',
      marginBottom: '1.4rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.3em'
    },
    onClick: () => onNavigate('lobby')
  }, 'llUll', React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      color: 'var(--text-dim)'
    }
  }, 'studio')), view === 'lobby' ? React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.6rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'var(--text)',
      maxWidth: 640,
      marginBottom: '1rem'
    }
  }, 'Instruments for ', React.createElement('em', {
    style: {
      fontStyle: 'italic',
      color: 'var(--amber)'
    }
  }, 'clarity.')) : React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.8rem',
      fontWeight: 400,
      color: 'var(--text)',
      marginBottom: '0.75rem'
    }
  }, curr.h1), React.createElement('p', {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-dim)',
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, curr.tagline)), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: '2.2rem',
      paddingTop: '0.15rem',
      flexShrink: 0
    }
  }, ...views.map(v => React.createElement('button', {
    key: v,
    onClick: () => onNavigate(v),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: view === v ? 'var(--amber)' : 'var(--text-faint)',
      transition: 'color 0.15s',
      padding: 0
    }
  }, v)), React.createElement('a', {
    href: 'https://rllull.substack.com',
    target: '_blank',
    rel: 'noopener',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      textDecoration: 'none',
      transition: 'color 0.15s'
    }
  }, 'Substack')));
}
Object.assign(window, {
  StudioHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_website/LobbyView.jsx
try { (() => {
// LobbyView.jsx — llull.studio home page
// Expose: Object.assign(window, { LobbyView })

function LobbyView() {
  const {
    Card,
    CardDesc,
    CardLink,
    Badge,
    SectionLabel
  } = window.DS;
  const sectionStyle = {
    padding: '3rem 4rem',
    borderBottom: '1px solid var(--border)'
  };
  const gridStyle3 = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '1.5rem'
  };
  const gridStyle2 = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '1.5rem'
  };
  return React.createElement('main', {
    style: {
      flex: 1
    }
  },
  // Currently
  React.createElement('section', {
    style: sectionStyle
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: '3rem',
      alignItems: 'flex-start'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.58rem',
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: 'var(--amber)',
      whiteSpace: 'nowrap',
      paddingTop: '0.35rem',
      minWidth: '5.5rem'
    }
  }, 'Currently'), React.createElement('div', null, React.createElement('a', {
    href: 'https://rllull.substack.com/p/the-cuckoo-protocol',
    target: '_blank',
    rel: 'noopener',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.35rem',
      fontWeight: 400,
      color: 'var(--text)',
      lineHeight: 1.25,
      marginBottom: '0.5rem',
      textDecoration: 'none',
      display: 'block',
      transition: 'color 0.15s'
    }
  }, 'The Cuckoo Protocol'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1rem',
      fontStyle: 'italic',
      color: 'var(--text-dim)',
      lineHeight: 1.6,
      marginBottom: '0.9rem',
      maxWidth: 560
    }
  }, 'How franchises eat their own mythic core — and teach the audience not to trust the uniform.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6rem',
      color: 'var(--text-faint)',
      letterSpacing: '0.08em'
    }
  }, 'Study 02 · Cognitive Cellar · ', React.createElement('a', {
    href: 'https://rllull.substack.com/p/the-cuckoo-protocol',
    target: '_blank',
    rel: 'noopener',
    style: {
      color: 'var(--amber-dim)',
      textDecoration: 'none',
      transition: 'color 0.15s'
    }
  }, 'rllull.substack.com →'))))),
  // Imprints
  React.createElement('section', {
    style: sectionStyle
  }, React.createElement(SectionLabel, null, 'Imprints'), React.createElement('div', {
    style: gridStyle3
  }, React.createElement(Card, {
    num: 'I',
    title: 'Cognitive Cellar',
    domain: 'Analytical instruments · R. Llull',
    finding: 'The instrument doesn\'t care what you believe. It scores what you do.',
    href: 'https://rllull.substack.com',
    external: true
  }, React.createElement(CardDesc, null, 'Scored studies, dispositional profiling, and the Terroir methodology. Applied to AI systems, ideological structures, institutions, and cultures.'), React.createElement(Badge, {
    variant: 'active'
  }, 'Active'), React.createElement(CardLink, null, 'rllull.substack.com')), React.createElement(Card, {
    num: 'II',
    title: 'llUll press',
    domain: 'Print publishing',
    finding: 'Titles that reward slow reading and physical form.'
  }, React.createElement(CardDesc, null, 'Print-first imprint. Heritage projects, limited editions, posters. The Lyon Building. Books that require the object.'), React.createElement(Badge, {
    variant: 'coming'
  }, 'Coming')), React.createElement(Card, {
    num: 'III',
    title: 'studio oi',
    domain: 'Image · video · photography · design',
    finding: 'Same precision, different register.'
  }, React.createElement(CardDesc, null, 'Still image, moving image, and creative experiments. Visual research running parallel to the analytical work.'), React.createElement(Badge, {
    variant: 'coming'
  }, 'Coming')))),
  // Instruments
  React.createElement('section', {
    style: {
      ...sectionStyle,
      borderBottom: 'none'
    }
  }, React.createElement(SectionLabel, null, 'Instruments'), React.createElement('div', {
    style: gridStyle2
  }, React.createElement(Card, {
    num: 'Engine of Utopia',
    title: 'Ideological Transmission Map',
    domain: 'Revolutionary collectivist firmware · 14 nodes · 5 eras',
    finding: 'The mass death is not the failure state.'
  }, React.createElement(CardDesc, null, 'A scored transmission map tracing the same epistemic engine from 18th-century France through its modern instantiations. Same engine, different target variable.'), React.createElement(Badge, {
    variant: 'dev'
  }, 'In Development')), React.createElement(Card, {
    num: 'Kernl',
    title: 'Cognitive Antivirus',
    domain: 'Real-time epistemic threat detection',
    finding: 'Detects structural manipulation regardless of truth value.',
    href: 'https://cognitivecellar.com',
    external: true
  }, React.createElement(CardDesc, null, 'Scans content for structural manipulation mechanisms and extracts the factual payload. Does not fact-check. Strictly neutral: fires on left, right, and center equally.'), React.createElement(Badge, {
    variant: 'active'
  }, 'Active Build'), React.createElement(CardLink, null, 'cognitivecellar.com')), React.createElement(Card, {
    num: 'The Last Backup',
    title: 'High-Fidelity Cognitive Encoding',
    domain: 'Framework · Three-axis architecture · HAL Stack',
    finding: 'Between the chatbot that sounds like your father and the connectome upload that is your father lies unexplored middle ground.'
  }, React.createElement(CardDesc, null, 'A modular encoding system for the generative machinery of a mind — not what someone says, but how the cognition that produces the speech works.'), React.createElement(Badge, {
    variant: 'dev'
  }, 'In Development')), React.createElement(Card, {
    num: 'The Collector',
    title: 'Dispositional Knowledge Filter',
    domain: 'Personal knowledge acquisition · Validation-gated',
    finding: 'The bottleneck being solved is saving too much, not finding too little.'
  }, React.createElement(CardDesc, null, 'A validation-gated knowledge ingestion system. Most captures are discarded. User-authored dispositional axes score what survives.'), React.createElement(Badge, {
    variant: 'coming'
  }, 'Coming')))));
}
Object.assign(window, {
  LobbyView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_website/LobbyView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_website/MapView.jsx
try { (() => {
// MapView.jsx — knowledge architecture as three pillars
// Static diagram with click-to-expand nodes
// Expose: Object.assign(window, { MapView })

const PILLARS = [{
  id: 'I',
  label: 'Pillar I',
  title: 'Terrain Mapping',
  nodes: [{
    id: '06',
    label: 'Study 06',
    title: 'CultureOS',
    desc: 'Culture as operating system. Scope: civilizational.'
  }, {
    id: '07',
    label: 'Study 07',
    title: 'CorporateOS',
    desc: 'The same firmware in institutional and corporate contexts.'
  }, {
    id: '08',
    label: 'Study 08',
    title: 'HumanOS',
    desc: 'Individual-level scope. Same dispositional axes at personal scale.'
  }, {
    id: '04',
    label: 'Study 04',
    title: 'Terrain Study 04',
    desc: 'Terroir methodology applied.'
  }, {
    id: '05',
    label: 'Study 05',
    title: 'Terrain Study 05',
    desc: 'Terroir methodology applied.'
  }, {
    id: '00',
    label: 'Study 00',
    title: 'Terrain Study 00',
    desc: 'Foundational terrain mapping methodology.'
  }, {
    id: '01',
    label: 'Study 01',
    title: 'Terrain Study 01',
    desc: 'Foundational terrain mapping methodology.'
  }],
  chain: ['06', '07', '08'],
  chainLabel: 'scope ladder'
}, {
  id: 'II',
  label: 'Pillar II',
  title: 'Ideological Threat Diagnostic',
  nodes: [{
    id: '13',
    label: 'Study 13',
    title: 'Engine of Utopia',
    desc: 'Revolutionary collectivist firmware. 14 nodes, 5 eras. Same engine, different target variable.'
  }, {
    id: '03',
    label: 'Study 03',
    title: 'WokeOS',
    desc: 'Dispositional firmware analysis. The ideological operating system and how it propagates.'
  }, {
    id: '09',
    label: 'Study 09',
    title: 'Wokefied',
    desc: 'How institutions and cultures transition into ideological capture.'
  }, {
    id: '02',
    label: 'Study 02',
    title: 'The Cuckoo Protocol',
    desc: 'How franchises eat their own mythic core.',
    url: 'https://rllull.substack.com/p/the-cuckoo-protocol'
  }, {
    id: '11',
    label: 'Study 11',
    title: 'EpistemyOS',
    desc: 'Epistemic operating system architecture. Foundation for Kernl.'
  }, {
    id: 'kernl',
    label: 'Instrument',
    title: 'Kernl',
    desc: 'Cognitive antivirus. Output of Study 11.',
    url: 'https://cognitivecellar.com',
    isInstrument: true
  }],
  chain: ['13', '03', '09', '02', '11', 'kernl'],
  chainLabel: 'transmission chain'
}, {
  id: 'III',
  label: 'Pillar III',
  title: 'Capture Dynamics',
  nodes: [{
    id: '12',
    label: 'Study 12',
    title: 'Cascade',
    desc: 'Capture dynamics in cascade failure mode. Cross-pillar bridge spanning all three methodological pillars.',
    isBridge: true
  }],
  chain: ['12'],
  chainLabel: 'cross-pillar bridge'
}];
const OUTSIDE = [{
  id: 'lyon',
  label: 'llUll press',
  title: 'The Lyon Building',
  desc: 'Outside the pillars. Print-first imprint. Books that require the object.'
}];
function MapNode({
  node,
  isActive,
  onClick,
  inChain
}) {
  const [hovered, setHovered] = React.useState(false);
  const isHighlighted = hovered || isActive;
  return React.createElement('div', {
    onClick: () => onClick(node),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      padding: '0.6rem 0.8rem',
      border: `1px solid ${isActive ? 'var(--amber)' : isHighlighted ? 'var(--amber-dim)' : 'var(--border)'}`,
      background: isActive ? 'var(--amber-faint)' : 'var(--surface)',
      cursor: 'pointer',
      transition: 'border-color 0.15s, background 0.15s',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.56rem',
      letterSpacing: '0.12em',
      color: node.isInstrument ? 'var(--amber)' : 'var(--amber-dim)',
      textTransform: 'uppercase',
      marginBottom: '0.2rem'
    }
  }, node.label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.9rem',
      color: isHighlighted ? 'var(--text)' : 'var(--text-dim)',
      lineHeight: 1.3
    }
  }, node.title));
}
function MapView() {
  const [active, setActive] = React.useState(null);
  const pillarStyle = {
    flex: 1,
    borderRight: '1px solid var(--border)',
    padding: '2rem 1.5rem'
  };
  const pillarLabelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.58rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--text-faint)',
    marginBottom: '0.3rem',
    display: 'block'
  };
  const pillarTitleStyle = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--text-dim)',
    marginBottom: '1.5rem'
  };
  const chainLabelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.55rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-faint)',
    marginTop: '1.2rem',
    marginBottom: '0.5rem',
    display: 'block',
    borderTop: '1px solid var(--border)',
    paddingTop: '0.75rem'
  };
  const arrowStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: 'var(--amber-dim)',
    textAlign: 'center',
    padding: '0.2rem 0',
    userSelect: 'none'
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
    nonChain.length > 0 && React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1rem'
      }
    }, ...nonChain.map(n => React.createElement(MapNode, {
      key: n.id,
      node: n,
      isActive: active?.id === n.id,
      onClick: handleNode
    }))),
    // Chain
    chainNodes.length > 1 && React.createElement('span', {
      style: chainLabelStyle
    }, pillar.chainLabel), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0'
      }
    }, ...chainNodes.flatMap((n, i) => {
      const items = [React.createElement(MapNode, {
        key: n.id,
        node: n,
        isActive: active?.id === n.id,
        onClick: handleNode,
        inChain: true
      })];
      if (i < chainNodes.length - 1) items.push(React.createElement('div', {
        key: `arrow-${i}`,
        style: arrowStyle
      }, '↓'));
      return items;
    })));
  }
  return React.createElement('main', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  },
  // Pillar columns
  React.createElement('div', {
    style: {
      display: 'flex',
      flex: 1,
      borderBottom: '1px solid var(--border)'
    }
  }, ...PILLARS.map((pillar, i) => React.createElement('div', {
    key: pillar.id,
    style: {
      ...pillarStyle,
      borderRight: i < PILLARS.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, React.createElement('span', {
    style: pillarLabelStyle
  }, pillar.label), React.createElement('div', {
    style: pillarTitleStyle
  }, pillar.title), renderNodes(pillar)))),
  // Outside pillars
  React.createElement('div', {
    style: {
      padding: '1.5rem 4rem',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.56rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginRight: '1rem'
    }
  }, 'Outside pillars'), ...OUTSIDE.map(n => React.createElement(MapNode, {
    key: n.id,
    node: n,
    isActive: active?.id === n.id,
    onClick: handleNode
  }))),
  // Expanded node detail
  active && React.createElement('div', {
    style: {
      padding: '1.5rem 4rem',
      background: 'var(--surface)',
      borderTop: '1px solid var(--amber-dim)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.58rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--amber-dim)',
      marginBottom: '0.4rem'
    }
  }, active.label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.25rem',
      color: 'var(--text)',
      marginBottom: '0.5rem'
    }
  }, active.title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '0.95rem',
      color: 'var(--text-dim)',
      lineHeight: 1.6,
      maxWidth: 560
    }
  }, active.desc), active.url && React.createElement('a', {
    href: active.url,
    target: '_blank',
    rel: 'noopener',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      color: 'var(--amber-dim)',
      display: 'inline-block',
      marginTop: '0.75rem',
      textDecoration: 'none'
    }
  }, new URL(active.url).hostname + ' →')), React.createElement('button', {
    onClick: () => setActive(null),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'none',
      border: 'none',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      padding: '0.25rem 0'
    }
  }, '× Close'))));
}
Object.assign(window, {
  MapView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_website/MapView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CurrentlyBlock = __ds_scope.CurrentlyBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardDesc = __ds_scope.CardDesc;

__ds_ns.CardLink = __ds_scope.CardLink;

__ds_ns.MonoLink = __ds_scope.MonoLink;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
