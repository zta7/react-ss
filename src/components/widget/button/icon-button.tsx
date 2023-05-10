import { styled } from 'core/stitches.config'

export const IconButton = styled('button', {
  color: '$hiContrast',
  variants: {
    size: {
      '1': {
        borderRadius: '$2',
        height: '$16',
        width: '$16',
        p: '$sizes$2'
      },
      '2': {
        borderRadius: '$1',
        height: '$10',
        width: '$10',
        p: '$sizes$1'
      }
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$baseA3'
          }
        },
        '&:active': {
          backgroundColor: '$baseA5'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$baseA5'
          }
      }
    },
    state: {
      active: {
        backgroundColor: '$base4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          }
        },
        '&:active': {
          backgroundColor: '$base4'
        }
      }
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'ghost'
  }
})
