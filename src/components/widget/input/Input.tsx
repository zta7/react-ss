import { styled } from 'core/stitches.config'

export const Input = styled('input', {
  backgroundColor: '$base1',
  color: '$base11',
  outline: 'none',

  // '&:focus': {
  //   boxShadow:
  //     'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
  //   '&:-webkit-autofill': {
  //     boxShadow:
  //       'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3'
  //   }
  // },
  // '&::placeholder': {
  //   color: '$base9'
  // },
  // '&:disabled': {
  //   pointerEvents: 'none',
  //   backgroundColor: '$slate2',
  //   color: '$slate8',
  //   cursor: 'not-allowed',
  //   '&::placeholder': {
  //     color: '$slate7'
  //   }
  // },
  // '&:read-only': {
  //   backgroundColor: '$slate2',
  //   '&:focus': {
  //     boxShadow: 'inset 0px 0px 0px 1px $colors$slate7'
  //   }
  // },

  variants: {
    size: {
      '1': {
        height: '$12',
        px: '$1',
        lineHeight: '$sizes$12'
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
})
