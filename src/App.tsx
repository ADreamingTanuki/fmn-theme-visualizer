import { useState } from 'react'
import ThemeControls from './controls/ThemeControls'
import { Typography } from './sections/Typography'
import { Colours } from './sections/Colours'
import { Panels } from './sections/Panels'
import { Patterns } from './sections/Patterns'
import './styles/layout.css'
import './styles/visualizer.css'

type Theme = 'light' | 'dark'
type Palette = 'herbalist' | 'dusty-rose'
type Font = 'classic' | 'romantic' | 'scholarly' | 'gentle-humanist' | 'typewriter'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [palette, setPalette] = useState<Palette>('herbalist')
  const [font, setFont] = useState<Font>('classic')

  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-palette', palette)
  document.documentElement.setAttribute('data-font', font)

  return (
    <div className="app-layout">
      <main className="sample-area">
        <Typography />
        <Colours />
        <Panels />
        <Patterns />
      </main>
      <footer className="visualizer-footer">
        <ThemeControls
          theme={theme}
          palette={palette}
          font={font}
          onThemeChange={setTheme}
          onPaletteChange={setPalette}
          onFontChange={setFont}
        />
      </footer>
    </div>
  )
}

export default App
