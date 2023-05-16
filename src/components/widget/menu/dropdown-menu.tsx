import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled, CSS } from 'core/stitches.config'
import { Card } from '../card'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Item, ItemGroup } from '../item'
import { AppPortal } from 'components/widget/portal'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
// const DropdownMenuItem = DropdownMenuPrimitive.Item
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, ItemGroup)
const DropdownMenuLabel = DropdownMenuPrimitive.Label
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  mx: '$3'
})

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, Item, {
  mx: '$3'
})

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, Card, {
  [`&>${DropdownMenuGroup}:nth-of-type(n+2)`]: {
    boxShadow: '$6 0px -1px 0px'
  }
})
type DropdownMenuContentProps = ComponentProps<
  typeof StyledDropdownMenuContent
> & { css?: CSS }

const DropdownMenuContent = forwardRef<
  ElementRef<typeof StyledDropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <AppPortal>
      <StyledDropdownMenuContent sticky="always" {...props} ref={forwardedRef}>
        {children}
      </StyledDropdownMenuContent>
    </AppPortal>
  )
})
DropdownMenuContent.displayName = 'DropdownMenuContent'

const StyledDropdownMenuSubContent = styled(
  DropdownMenuPrimitive.SubContent,
  Card,
  {
    [`&>${DropdownMenuGroup}:nth-of-type(n+2)`]: {
      boxShadow: '$6 0px -1px 0px'
    }
    // transform: `translateY(calc(-50% + var(--radix-dropdown-menu-trigger-height)))`
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
    <AppPortal>
      <StyledDropdownMenuSubContent
        alignOffset={-20}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </StyledDropdownMenuSubContent>
    </AppPortal>
  )
})
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent'

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
