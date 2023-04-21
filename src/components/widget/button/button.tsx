import { cva, type VariantProps, cx } from 'class-variance-authority'
import {
  ButtonContextValue,
  ButtonProvider,
  useButton
} from 'components/widget/button/context'
import { HTMLAttributes, ReactNode, forwardRef, useState } from 'react'

const button = cva('', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded'
    },
    color: {
      base: 'hover:enabled:bg-base-200 [&:active:enabled:not(:has(button:active))]:bg-base-300',
      deeper:
        'hover:enabled:bg-base-300 [&:active:enabled:not(:has(button:active))]:bg-base-400'
    },
    isDisabled: {
      true: 'cursor-not-allowed',
      false: 'cursor-pointer'
    }
  },
  defaultVariants: {
    square: false,
    color: 'base',
    isDisabled: false
  }
})

type Raw = Omit<HTMLAttributes<HTMLButtonElement>, 'color'> & {
  children: ReactNode
}
type Style = VariantProps<typeof button>

export interface ButtonProps extends Raw, Style {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardRef) => {
    const { square, color, isDisabled, className, ...rest } = props
    const disabled = Boolean(isDisabled)
    return (
      <ButtonProvider>
        <button
          ref={forwardRef}
          aria-disabled={disabled}
          disabled={disabled}
          className={cx(button({ square, color, isDisabled }), className)}
          {...rest}
        ></button>
      </ButtonProvider>
    )
  }
)

Button.displayName = 'Button'
