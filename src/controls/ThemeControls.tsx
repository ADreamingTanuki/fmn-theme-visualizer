type Theme = 'light' | 'dark'
type Palette = 'herbalist' | 'dusty-rose'
type Font = 'classic' | 'romantic' | 'scholarly' | 'gentle-humanist' | 'typewriter'

interface Props {
  theme: Theme
  palette: Palette
  font: Font
  onThemeChange: (t: Theme) => void
  onPaletteChange: (p: Palette) => void
  onFontChange: (f: Font) => void
}

const THEMES: Theme[] = ['light', 'dark']
const PALETTES: Palette[] = ['herbalist', 'dusty-rose']
const FONTS: Font[] = ['classic', 'romantic', 'scholarly', 'gentle-humanist', 'typewriter']

const PALETTE_LABELS: Record<Palette, string> = {
  'herbalist':  'Herbalist',
  'dusty-rose': 'Dusty Rose',
}

const FONT_LABELS: Record<Font, string> = {
  'classic':           'Classic',
  'romantic':          'Romantic',
  'scholarly':         'Scholarly',
  'gentle-humanist':   'Gentle Humanist',
  'typewriter':        'Typewriter',
}

export default function ThemeControls({ theme, palette, font, onThemeChange, onPaletteChange, onFontChange }: Props) {
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
      <div className="control-divider" />
      <div className="control-group">
        {FONTS.map((f) => (
          <button
            key={f}
            className={`control-btn${font === f ? ' active' : ''}`}
            onClick={() => onFontChange(f)}
          >
            {FONT_LABELS[f]}
          </button>
        ))}
      </div>
    </div>
  )
}
