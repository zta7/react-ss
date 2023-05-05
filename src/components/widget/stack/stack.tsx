import { ReactNode } from 'react'
import { classed, VariantProps } from '@tw-classed/react'

export const Stack = classed.div('', {
  variants: {
    orientation: {
      horizontal: 'flex flex-row',
      vertical: 'flex flex-col'
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
    gap: {
      xs: 'gap-[1px]',
      sm: '',
      md: '',
      lg: '',
      xl: ''
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    align: 'center',
    justify: 'center',
    wrap: false
  }
})

export type StackProps = VariantProps<typeof Stack> & { children: ReactNode }

// export const Stack = ({ children, ...style }: StackProps) => {
//   return <div className={stack(style)}>{children}</div>
// }
