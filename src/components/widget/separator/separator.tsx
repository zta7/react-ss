import { styled } from 'core/stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export const Separator = styled(
  SeparatorPrimitive.Root,
  // 'cursor-default shrink-0 bg-base-600',
  {
    backgroundColor: '$base4',

    variants: {
      size: {
        1: {
          '&[data-orientation=horizontal]': { height: 1, width: '100%' },
          '&[data-orientation=vertical]': {
            height: 'auto',
            width: 1,
            alignSelf: 'stretch'
          }
        }
      }
    },
    defaultVariants: {
      size: '1'
    }
  }
)
