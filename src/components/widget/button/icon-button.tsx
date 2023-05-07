import { styled } from 'core/stitches.config'

export const IconButton = styled('button', {
  color: '$hiContrast',
  backgroundColor: '$loContrast',
  variants: {
    size: {
      '1': {
        borderRadius: '$2',
        height: '$10',
        width: '$10',
        p: '2px'
      }
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3'
          }
        },
        '&:active': {
          backgroundColor: '$slateA5'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA5'
          }
      }
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          }
        },
        '&:active': {
          backgroundColor: '$slate4'
        }
      }
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'ghost'
  }
})
