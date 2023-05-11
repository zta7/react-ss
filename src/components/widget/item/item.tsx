import { styled } from 'core/stitches.config'

// export const ItemSection = styled('div', {})
export const Item = styled('div', {
  display: 'flex',
  flexFlow: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '$2 $3',
  outline: 'none',
  '@hover': {
    '&:hover': {
      backgroundColor: '$base7'
    }
  },
  '&:active': {
    backgroundColor: '$base6'
  },
  '&:focus': {
    backgroundColor: '$base6'
  },

  variants: {
    square: {
      true: { borderRadius: 0 },
      false: { borderRadius: '$2' }
    },
    state: {
      active: {
        backgroundColor: '$base4'
      }
    }
  },
  defaultVariants: {
    square: false
  }
})
