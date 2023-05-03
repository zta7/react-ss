import { classed } from '@tw-classed/react'

export const Text = classed.span('font-normal m-0 inline-block', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})
