import { classed } from 'core/classed.config'

const Button = classed.button(
  'inline-flex font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-2 ring-offset-1',
  {
    variants: {
      flat: {
        true: 'border-none'
      },
      size: {
        1: 'px-3 py-1 rounded text-base'
      },
      variant: {
        outline: 'border',
        solid: 'border-none text-white'
      },
      color: {
        base: '',
        primary: ''
      },
      state: {
        disabled: 'opacity-50 pointer-events-none'
      }
    },
    defaultVariants: {
      size: 1,
      color: 'primary',
      variant: 'outline'
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'base',
        className: `border-base6 bg-base3
          hover:border-base8 focus:border-base7 hover:bg-base4 active:bg-base5`
      },
      {
        variant: 'solid',
        color: 'base',
        className: `bg-base9 hover:bg-base10`
      },

      {
        variant: 'outline',
        color: 'primary',
        className: `border-primary6 bg-primary3
          hover:border-primary8 focus:border-primary7 hover:bg-primary4 active:bg-primary5`
      },
      {
        variant: 'solid',
        color: 'primary',
        className: `bg-primary9 hover:bg-primary10`
      }
    ]
  }
)

export { Button }
