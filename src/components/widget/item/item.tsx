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
      backgroundColor: '$base5'
    }
  },
  '&:active': {
    backgroundColor: '$base4'
  },
  '&:focus': {
    backgroundColor: '$base4'
  },

  variants: {
    state: {
      active: {
        backgroundColor: '$base4'
      }
    }
  }
})
