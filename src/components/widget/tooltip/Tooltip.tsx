import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled, CSS } from 'core/stitches.config'
import {
  ComponentProps,
  ElementRef,
  forwardRef,
  useEffect,
  useState
} from 'react'
import { Card } from '../card'

const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const StyledContent = styled(TooltipPrimitive.Content, Card)

type TooltipContentProps = ComponentProps<typeof StyledContent> & {
  css?: CSS
}

const TooltipContent = forwardRef<
  ElementRef<typeof StyledContent>,
  TooltipContentProps
>(({ children, ...props }, fowardedRef) => {
  const [container, setContainer] = useState(document.body)

  useEffect(() => {
    const el = document.getElementById('app')
    el && setContainer(el)
  }, [])

  return (
    <TooltipPrimitive.Portal container={container}>
      <StyledContent {...props} ref={fowardedRef}>
        {children}
      </StyledContent>
    </TooltipPrimitive.Portal>
  )
})

TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent }
