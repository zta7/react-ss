import { cva, type VariantProps, cx } from 'class-variance-authority'
import {
  ButtonContextValue,
  ButtonProvider,
  useButton
} from 'components/widget/button/context'
import { HTMLAttributes, ReactNode, forwardRef, useState } from 'react'

const button = cva('button', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded'
    },
    color: {
      base: 'hover:bg-base-200 [&:active:not(:has(button:active))]:bg-base-300',
      deeper:
        'hover:bg-base-300 [&:active:not(:has(button:active))]:bg-base-400'
    }
  },
  defaultVariants: {
    square: false,
    color: 'base'
  }
})

type Raw = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  children: ReactNode
}
type Style = VariantProps<typeof button>
type Behavior = ButtonContextValue

export interface ButtonProps extends Raw, Style, Behavior {}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (props, forwardRef) => {
    const { square, color, isDisabled, isLoading, className, ...rest } = props

    return (
      <ButtonProvider isDisabled={isDisabled} isLoading={isLoading}>
        <div
          ref={forwardRef}
          role="button"
          aria-disabled={isDisabled || isLoading}
          className={cx(button({ square, color }), className)}
          {...rest}
        ></div>
      </ButtonProvider>
    )
  }
)

Button.displayName = 'Button'
