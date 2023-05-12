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
         $3 0px 0px 0px 1px, 
         $5 0px 3px 6px, 
         $8 0px 9px 24px;
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
