import { styled } from 'core/stitches.config'

export const Icon = styled('div', {
  // padding: 0,
  variants: {
    size: {
      '1': {
        height: '$10',
        width: '$10'
      },
      '2': {
        height: '$12',
        width: '$12'
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
})
