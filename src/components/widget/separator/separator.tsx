import { classed } from '@tw-classed/react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export const Separator = classed(
  SeparatorPrimitive.Root,
  'cursor-default shrink-0 bg-base-600',
  {
    variants: {
      size: {
        1: 'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:h-[10px]'
      }
    },
    defaultVariants: {
      size: '1'
    }
  }
)
