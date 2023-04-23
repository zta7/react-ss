import { cva, type VariantProps, cx } from 'class-variance-authority'
import { HTMLAttributes, ReactNode, forwardRef } from 'react'

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
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer'
    }
  },
  defaultVariants: {
    square: false,
    color: 'base',
    disabled: false
  }
})

type Raw = Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'> & {
  children: ReactNode
}
type Style = VariantProps<typeof button>

export interface ButtonProps extends Raw, Style {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardRef) => {
    const { square, color, disabled, className, ...rest } = props
    return (
      <button
        ref={forwardRef}
        aria-disabled={Boolean(disabled)}
        disabled={Boolean(disabled)}
        className={cx(button({ square, color, disabled }), className)}
        {...rest}
      ></button>
    )
  }
)

Button.displayName = 'Button'
