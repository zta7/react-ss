import { classed } from '@tw-classed/react'

export const Card = classed.div('', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded'
    },
    shadow: {
      none: 'shadow-none',
      md: 'shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_3px_6px,rgba(0,0,0,0.2)_0px_3px_8px] shadow-base-500'
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
