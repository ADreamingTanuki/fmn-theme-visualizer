import { useState } from 'react'
import ThemeControls from './controls/ThemeControls'
import { Typography } from './sections/Typography'
import { Colours } from './sections/Colours'
import { Panels } from './sections/Panels'
import { Patterns } from './sections/Patterns'
import './styles/layout.css'
import './styles/visualizer.css'

type Theme = 'light' | 'dark'
type Palette = 'herbalist' | 'forest' | 'dusty-rose' | 'midnight' | 'overcast' | 'candlelit'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [palette, setPalette] = useState<Palette>('herbalist')

  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-palette', palette)

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
          onThemeChange={setTheme}
          onPaletteChange={setPalette}
        />
      </footer>
    </div>
  )
}

export default App
