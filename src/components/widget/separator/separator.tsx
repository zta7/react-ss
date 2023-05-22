import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { classed } from 'core/classed.config'

export const Separator = classed(
  SeparatorPrimitive.Root,
  'cursor-default shrink-0 bg-base4',
  {
    variants: {
      size: {
        1: `
          data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-[100%] 
          data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[1px] data-[orientation=vertical]:self-stretch`
      }
    },
    defaultVariants: {
      size: '1'
    }
  }
)
