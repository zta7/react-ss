import { classed } from '@tw-classed/react'

export const Card = classed.div('', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded'
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      xl: 'shadow-xl'
    },
    bordered: {
      true: 'border'
    }
  },
  defaultVariants: {
    square: false,
    shadow: 'md'
  }
})
