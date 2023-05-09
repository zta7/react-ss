import { styled } from 'core/stitches.config'

export const Button = styled('button', {
  variants: {
    size: {
      '1': {
        padding: '$1 $6',
        borderRadius: '$2'
        // height: '$8',
        // px: '$2',
        // fontSize: '$1',
        // lineHeight: '$sizes$8'
      }
    },
    variant: {
      outline: {
        borderRadius: '$2',
        borderWidth: '$1'
      }
    },
    color: {
      base: {
        // '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
        //   {
        //     backgroundColor: '$base4',
        //     boxShadow: 'inset 0 0 0 1px $colors$base8'
        //   }
      }
    }
    // color: {
    //   base: 'hover:enabled:bg-base-200 [&:active:enabled:not(:has(button:active))]:bg-base-300',
    //   deeper:
    //     'hover:enabled:bg-base-300 [&:active:enabled:not(:has(button:active))]:bg-base-400'
    // }
  },
  defaultVariants: {
    size: '1',
    color: 'base',
    variant: 'outline'
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'base',
      css: {
        backgroundColor: '$base2',
        borderColor: '$base7',
        // color: '$base12',
        '@hover': {
          '&:hover': {
            borderColor: '$base8'
          }
        },
        '&:active': {
          backgroundColor: '$base4'
        }
      }
    }
  ]
})

Button.displayName = 'Button'
