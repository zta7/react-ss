import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const stack = cva('', {
  variants: {
    direction: {
      row: 'flex flex-row',
      col: 'flex flex-col'
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch'
    },
    justify: {
      start: 'justify-items-start',
      end: 'justify-items-end',
      center: 'justify-items-center',
      stretch: 'justify-items-stretch'
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap'
    },
    spacing: {
      xs: 'gap-[1px]',
      sm: '',
      md: '',
      lg: '',
      xl: ''
    }
  },
  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    wrap: false
  }
})

export type StackProps = VariantProps<typeof stack> & { children: ReactNode }

export const Stack = ({ children, ...style }: StackProps) => {
  return <div className={stack(style)}>{children}</div>
}

Stack.displayname = 'Stack'
