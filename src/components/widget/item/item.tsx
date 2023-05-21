import { classed } from 'core/classed.config'

export const ItemGroup = classed.div('py-3')
export const ItemSection = classed.div({
  // variants
  variants: {
    variant: {
      side: 'peer-[.main]:text-base9 peer-[.main]:mr-3 peer-[.main]:ml-0 ml-3 mr-2',
      main: 'peer main w-auto w-min-[0px] w-max-[100%] flex-auto mx-1'
    }
  },
  defaultVariants: {
    variant: 'main'
  }
})
export const Item = classed.div(
  `relative flex flex-row flex-nowrap items-center 
   hover:bg-base7 focus:bg-base6 active:bg-base6 cursor-pointer 
   text-base12 text-[1rem]/[1rem] py-2`,
  {
    variants: {
      state: {
        disabled: 'text-base10 pointer-events-none',
        active: 'bg-base6'
      },
      square: {
        true: 'rounded-none',
        false: 'rounded-sm'
      }
    },
    defaultVariants: {
      square: false
    }
  }
)
