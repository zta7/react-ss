import { styled } from 'core/stitches.config'

export const Card = styled('div', {
  backgroundColor: '$base1',
  color: '$base12',
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
         rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, 
         rgba(15, 15, 15, 0.1) 0px 5px 10px, 
         rgba(15, 15, 15, 0.2) 0px 15px 40px;
        `
      }
    }
  },
  defaultVariants: {
    square: false,
    shadow: 'md'
  }
})
