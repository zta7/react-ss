import { HTMLAttributes, forwardRef } from 'react'

export const Label = forwardRef<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>((props, forwardRef) => {
  return <label {...props} ref={forwardRef}></label>
})

Label.displayName = 'Label'
