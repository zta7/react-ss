import { classed } from 'core/classed.config'

export const ItemGroup = classed.div('py-3')
export const ItemLabel = classed.div('peer label peer-[.label]:mt-1')
export const ItemSection = classed.div({
  // variants
  variants: {
    variant: {
      side: 'peer-[.main]:text-base9 peer-[.main]:mr-3 peer-[.main]:ml-0 ml-3 mr-2 text-caption',
      main: 'peer main w-auto w-min-[0px] w-max-[100%] flex-auto mx-1'
    }
  },
  defaultVariants: {
    variant: 'main'
  }
})
export const Item = classed.div(
  `relative flex flex-row flex-nowrap items-center 
    font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-2 ring-offset-1 cursor-pointer`,
  {
    variants: {
      flat: {
        true: 'border-none'
      },
      square: {
        true: 'rounded-none',
        false: 'rounded'
      },
      // size: {
      //   1: 'px-3 py-1 text-base'
      // },
      variant: {
        outline: 'border',
        solid: 'border-none text-white'
      },
      color: {
        base: 'aria-selected:bg-base6',
        primary: 'aria-selected:bg-primary5'
      },
      state: {
        disabled: 'opacity-50 pointer-events-none'
      }
    },
    defaultVariants: {
      // size: 1,
      color: 'primary',
      variant: 'outline'
    },
    compoundVariants: [
      // {
      //   variant: 'outline',
      //   color: 'base',
      //   className: `border-base6 bg-base3
      //     hover:border-base8 focus:border-base7 hover:bg-base4 active:bg-base5`
      // },
      // {
      //   variant: 'solid',
      //   color: 'base',
      //   className: `bg-base9 hover:bg-base10`
      // },
      // {
      //   variant: 'outline',
      //   color: 'primary',
      //   className: `border-primary6 bg-primary3
      //     hover:border-primary8 focus:border-primary7 [&:hover]:bg-primary4 active:bg-primary5`
      // },
      // {
      //   variant: 'solid',
      //   color: 'primary',
      //   className: `bg-primary9 hover:bg-primary10`
      // }
    ]
  }
)
