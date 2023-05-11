import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled, CSS } from 'core/stitches.config'
import { Card } from '../card'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Item } from '../item'
import { Box } from '../box'

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
// const DropdownMenuItem = DropdownMenuPrimitive.Item
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuLabel = DropdownMenuPrimitive.Label
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuSubTrigger = DropdownMenuPrimitive.SubTrigger

const StyledDropdownMenuItemBox = styled('div')
const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item, { mx: '$2' })
type DropdownMenuItemProps = ComponentProps<typeof StyledDropdownMenuItem> & {
  css?: CSS
}

const DropdownMenuItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuItem>,
  DropdownMenuItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledDropdownMenuItemBox>
      <StyledDropdownMenuItem {...props} ref={forwardedRef}>
        {children}
      </StyledDropdownMenuItem>
    </StyledDropdownMenuItemBox>
  )
})
DropdownMenuItem.displayName = 'DropdownMenuItem'

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, Card)
type DropdownMenuContentProps = ComponentProps<
  typeof StyledDropdownMenuContent
> & { css?: CSS }

const DropdownMenuContent = forwardRef<
  ElementRef<typeof StyledDropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledDropdownMenuContent sticky="always" {...props} ref={forwardedRef}>
        {children}
      </StyledDropdownMenuContent>
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = 'DropdownMenuContent'

const StyledDropdownMenuSubContent = styled(
  DropdownMenuPrimitive.SubContent,
  Card,
  {
    transform: `translateY(calc(-50% + var(--radix-dropdown-menu-trigger-height)))`
  }
)
type DropdownMenuSubContentProps = ComponentProps<
  typeof StyledDropdownMenuSubContent
> & { css?: CSS }

const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof StyledDropdownMenuSubContent>,
  DropdownMenuSubContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledDropdownMenuSubContent
        alignOffset={-20}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </StyledDropdownMenuSubContent>
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent'

const DropdownMenu = styled(DropdownMenuPrimitive.Root, {})
// const DropdownMenuSubContent = DropdownMenuPrimitive.SubContent

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
}
