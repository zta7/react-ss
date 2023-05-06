import { classed } from '@tw-classed/react'
import { Rounded } from '../variants/rounded'
import { State } from '../variants/state'

export const Button = classed.button('', {
  variants: {
    rounded: Rounded,
    state: State,
    color: {
      base: 'hover:enabled:bg-base-200 [&:active:enabled:not(:has(button:active))]:bg-base-300',
      deeper:
        'hover:enabled:bg-base-300 [&:active:enabled:not(:has(button:active))]:bg-base-400'
    }
  },
  defaultVariants: {
    rounded: 0,
    color: 'base'
  }
})

Button.displayName = 'Button'
