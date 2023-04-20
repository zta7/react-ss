import * as React from 'react'
import { cx } from 'class-variance-authority'

export const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, forwardRef) => {
  const { children, className } = props

  return (
    <div
      ref={forwardRef}
      className={cx(
        'scrollbar-thin scrollbar-thumb-base-800 scrollbar-track-base-400 scrollbar-corner-base-600 overflow-auto max-h-[100%]',
        className
      )}
    >
      {children}
    </div>
  )
})

ScrollArea.displayName = 'ScrollArea'
