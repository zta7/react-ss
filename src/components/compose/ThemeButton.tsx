import { SunIcon } from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
import { darkTheme } from 'core/stitches.config'
import { useState, useEffect } from 'react'

export const ThemeButton = () => {
  const [theme, setTheme] = useState('default')
  const html = document.querySelector('html') as HTMLHtmlElement
  useEffect(() => {
    // html.classList.remove('theme-default', darkTheme)
    html.className = ''
    html.classList.add(theme)
  }, [html, html.classList, theme])

  return (
    <IconButton
      onClick={() => setTheme(theme === 'default' ? 'dark' : 'default')}
    >
      <SunIcon />
    </IconButton>
  )
}
