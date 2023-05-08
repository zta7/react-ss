import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ElementRef, forwardRef, ComponentProps } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { CSS, styled } from 'core/stitches.config'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  borderWidth: '$1',
  variants: {
    size: {
      1: {
        size: '$8'
      }
    }
  },
  defaultVariants: {
    size: 1
  }
})
const CheckboxIndicator = CheckboxPrimitive.Indicator

type SwitchProps = ComponentProps<typeof StyledCheckbox> & { css?: CSS }

export const Checkbox = forwardRef<
  ElementRef<typeof StyledCheckbox>,
  SwitchProps
>((props, forwardRef) => {
  return (
    <StyledCheckbox {...props} ref={forwardRef}>
      <CheckboxIndicator asChild>
        <CheckIcon />
      </CheckboxIndicator>
    </StyledCheckbox>
  )
})

Checkbox.displayName = 'Checkbox'
