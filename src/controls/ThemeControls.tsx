type Theme = 'light' | 'dark'
type Palette = 'herbalist' | 'forest' | 'dusty-rose' | 'midnight' | 'overcast' | 'candlelit'

interface Props {
  theme: Theme
  palette: Palette
  onThemeChange: (t: Theme) => void
  onPaletteChange: (p: Palette) => void
}

const THEMES: Theme[] = ['light', 'dark']
const PALETTES: Palette[] = ['herbalist', 'forest', 'dusty-rose', 'midnight', 'overcast', 'candlelit']

const PALETTE_LABELS: Record<Palette, string> = {
  'herbalist':  'Herbalist',
  'forest':     'Forest',
  'dusty-rose': 'Dusty Rose',
  'midnight':   'Midnight',
  'overcast':   'Overcast',
  'candlelit':  'Candlelit',
}

export default function ThemeControls({ theme, palette, onThemeChange, onPaletteChange }: Props) {
  return (
    <div className="controls">
      <div className="control-group">
        {THEMES.map((t) => (
          <button
            key={t}
            className={`control-btn${theme === t ? ' active' : ''}`}
            onClick={() => onThemeChange(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="control-divider" />
      <div className="control-group">
        {PALETTES.map((p) => (
          <button
            key={p}
            className={`control-btn${palette === p ? ' active' : ''}`}
            onClick={() => onPaletteChange(p)}
          >
            {PALETTE_LABELS[p]}
          </button>
        ))}
      </div>
    </div>
  )
}
