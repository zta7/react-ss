import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ElementRef, forwardRef, ComponentProps } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { classed } from 'core/classed.config'

const StyledCheckbox = classed(CheckboxPrimitive.Root, 'border rounded-sm', {
  variants: {
    size: {
      1: 'w-5 h-5 stroke-[4] p-[1px]'
    },
    color: {
      primary:
        'data-[state=checked]:bg-primary9 stroke-white border-primary6 hover:border-primary8 focus:border-primary7'
    }
  },
  defaultVariants: {
    size: 1,
    color: 'primary'
  }
})
const CheckboxIndicator = CheckboxPrimitive.Indicator

type SwitchProps = ComponentProps<typeof StyledCheckbox>

export const Checkbox = forwardRef<
  ElementRef<typeof StyledCheckbox>,
  SwitchProps
>((props, forwardRef) => {
  return (
    <StyledCheckbox {...props} ref={forwardRef}>
      <CheckboxIndicator asChild>
        <CheckIcon className="te" />
      </CheckboxIndicator>
    </StyledCheckbox>
  )
})

Checkbox.displayName = 'Checkbox'
