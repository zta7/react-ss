import { styled } from 'core/stitches.config'

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
      none: {
        boxShadow: 'none'
      },
      md: {
        boxShadow: `
         $colors$blackA3 0px 0px 0px 1px, 
         $colors$blackA5 0px 3px 6px, 
         $colors$blackA8 0px 9px 24px;
        `
      }
    }
  },
  defaultVariants: {
    square: false,
    shadow: 'md'
  }
})
