import { styled } from 'core/stitches.config'

export const Button = styled('button', {
  // padding: '$2 $4',
  fontFamily: '$untitled',
  fontWeight: 500,
  variants: {
    square: {
      true: {
        borderRadius: '$0'
      },
      false: {
        borderRadius: '$2'
      }
    },
    size: {
      '1': {
        borderRadius: '$2',
        height: '$8',
        // px: '$2',
        // fontSize: '$1',
        lineHeight: '$sizes$8'
      }
    }
    // color: {
    //   base: 'hover:enabled:bg-base-200 [&:active:enabled:not(:has(button:active))]:bg-base-300',
    //   deeper:
    //     'hover:enabled:bg-base-300 [&:active:enabled:not(:has(button:active))]:bg-base-400'
    // }
  },
  defaultVariants: {
    square: false,
    size: '1'
  }
})

Button.displayName = 'Button'
