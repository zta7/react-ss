import { styled } from 'core/stitches.config'
import { ElementRef, forwardRef, ComponentProps } from 'react'

const StyledField = styled('div', {
  // '&:focus': {
  //   boxShadow:
  //     'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
  //   '&:-webkit-autofill': {
  //     boxShadow:
  //       'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3'
  //   }
  // },
  // '&::placeholder': {
  //   color: '$base9'
  // },
  // '&:disabled': {
  //   pointerEvents: 'none',
  //   backgroundColor: '$slate2',
  //   color: '$slate8',
  //   cursor: 'not-allowed',
  //   '&::placeholder': {
  //     color: '$slate7'
  //   }
  // },
  // '&:read-only': {
  //   backgroundColor: '$slate2',
  //   '&:focus': {
  //     boxShadow: 'inset 0px 0px 0px 1px $colors$slate7'
  //   }
  // },
})

type Props = ComponentProps<typeof StyledField>

export const Field = forwardRef<ElementRef<typeof StyledField>, Props>(() => {
  return <div>123</div>
})

Field.displayName = 'Field'
