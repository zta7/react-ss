import { styled } from 'core/stitches.config'

export const ItemGroup = styled('div', { py: '$3' })
export const ItemSection = styled('div', {
  // variants
})
export const Item = styled('div', {
  display: 'flex',
  flexFlow: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  // padding: '$2 $3',
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
    // outline: 'none'
  },

  // [`&>${ItemSection} + ${ItemSection}`]: {
  //   marginLeft: 8
  //   // '&:first-child': {
  //   //   marginLeft: '$5',
  //   //   marginRight: '$2'
  //   // },
  //   // // '&:nth-last-child(2)': {
  //   // //   marginRight: ''
  //   // // },
  //   // '&:last-child': {
  //   //   marginRight: '$6'
  //   // }
  // },

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
