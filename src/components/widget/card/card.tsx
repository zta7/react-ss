import { cva, type VariantProps, cx } from 'class-variance-authority'
import { HTMLAttributes, ReactNode, forwardRef } from 'react'

export const card = cva('', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded'
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      xl: 'shadow-xl'
    },
    bordered: {
      true: 'border'
    }
  },
  defaultVariants: {
    square: false,
    shadow: 'md'
  }
})
export type cardStyle = VariantProps<typeof card>
type Props = cardStyle & HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, Props>((props, forwardRef) => {
  const { square, shadow, bordered, className, ...rest } = props
  return (
    <div
      ref={forwardRef}
      className={cx(card({ square, shadow, bordered }), className)}
      {...rest}
    ></div>
  )
})

Card.displayName = 'Card'
