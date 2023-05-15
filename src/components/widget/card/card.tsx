import { styled } from 'core/stitches.config'

export const CardSection = styled('div', {})

export const Card = styled('div', {
  backgroundColor: '$base3',
  variants: {
    square: {
      true: {
        borderRadius: '$0'
      },
      false: {
        borderRadius: '$2'
      }
    },
    shadow: {
      0: {
        boxShadow: 'none'
      },
      1: {
        boxShadow: `
         $colors$blackA3 0px 0px 0px 1px, 
         $colors$blackA5 0px 3px 6px, 
         $colors$blackA8 0px 9px 24px;
        `
      }
    }
  },
  [`& ${CardSection}`]: {
    py: '$3'
  },
  defaultVariants: {
    square: false,
    shadow: 1
  }
})
