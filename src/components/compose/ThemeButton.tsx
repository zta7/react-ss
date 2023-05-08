import { SunIcon } from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
import { darkTheme } from 'core/stitches.config'
import { useState, useEffect } from 'react'

export const ThemeButton = () => {
  const [theme, setTheme] = useState('theme-default')
  const html = document.querySelector('html') as HTMLHtmlElement
  useEffect(() => {
    html.classList.remove('theme-default', darkTheme)
    html.classList.add(theme)
  }, [html.classList, theme])

  return (
    <IconButton
      onClick={() =>
        setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')
      }
    >
      <SunIcon />
    </IconButton>
  )
}
