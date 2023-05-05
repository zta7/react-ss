import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { classed, VariantProps } from '@tw-classed/react'
import { ElementRef, forwardRef, ComponentProps } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const ClassedCheckbox = classed(CheckboxPrimitive.Root, ' border', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})
const ClassedIndicator = classed(CheckboxPrimitive.Indicator)

type CheckboxProps = ComponentProps<typeof ClassedCheckbox>

export const Checkbox = forwardRef<
  ElementRef<typeof ClassedCheckbox>,
  CheckboxProps
>((props, forwardRef) => {
  return (
    <ClassedCheckbox ref={forwardRef} {...props}>
      <ClassedIndicator>
        <CheckIcon />
      </ClassedIndicator>
    </ClassedCheckbox>
  )
})

Checkbox.displayName = 'Checkbox'
