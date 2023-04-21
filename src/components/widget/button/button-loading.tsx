import { forwardRef, HTMLAttributes } from 'react'

export const ButtonLoading = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(() => {
  return <div>Loading...</div>
})

ButtonLoading.displayName = 'ButtonLoading'
