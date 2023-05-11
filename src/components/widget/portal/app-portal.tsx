import * as Portal from '@radix-ui/react-portal'
import { ReactNode, useEffect, useState } from 'react'

export const AppPortal = ({ children }: { children: ReactNode }) => {
  const [container, setContainer] = useState<HTMLElement>(document.body)

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.app')
    el && setContainer(el)
  }, [])

  return <Portal.Root container={container}>{children}</Portal.Root>
}
