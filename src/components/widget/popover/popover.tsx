import * as PopoverPrimitive from '@radix-ui/react-popover'
import { styled, CSS } from 'core/stitches.config'
import {
  ComponentProps,
  ElementRef,
  forwardRef,
  useEffect,
  useState
} from 'react'
import { Card } from '../card'

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const StyledContent = styled(PopoverPrimitive.Content, Card)

type PopoverContentProps = ComponentProps<typeof StyledContent> & {
  css?: CSS
}

const PopoverContent = forwardRef<
  ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, ...props }, fowardedRef) => {
  const [container, setContainer] = useState(document.body)

  useEffect(() => {
    const el = document.getElementById('app')
    el && setContainer(el)
  }, [])

  return (
    <PopoverPrimitive.Portal container={container}>
      <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
        {children}
      </StyledContent>
    </PopoverPrimitive.Portal>
  )
})

PopoverContent.displayName = 'PopoverContent'
const PopoverClose = PopoverPrimitive.Close

export { Popover, PopoverTrigger, PopoverContent, PopoverClose }
