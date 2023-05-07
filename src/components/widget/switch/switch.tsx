import { styled, VariantProps, CSS } from 'core/stitches.config'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { ElementRef, forwardRef } from 'react'

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px $3;',
  transition: '0.3s'
})

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  backgroundColor: '$slate5',
  position: 'relative',

  '&[data-state="checked"]': {
    backgroundColor: '$blue9'
  },

  variants: {
    size: {
      '1': {
        width: '$10',
        height: '$6',
        borderRadius: '$sizes$6',
        [`& ${StyledThumb}`]: {
          width: 'calc($6 - $1)',
          height: 'calc($6 - $1)',
          borderRadius: 'calc($sizes$6 - $1)',
          left: '1px',
          top: '1px',
          '&[data-state="checked"]': {
            left: 'calc(100% - 1px)',
            transform: 'translateX(-100%)'
          }
        },
        '&:active': {
          [`& ${StyledThumb}`]: {
            width: 'calc($6 - $1 + $2)'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
})

type SwitchVariants = VariantProps<typeof StyledSwitch>
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS }

export const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
)

Switch.displayName = 'Switch'
