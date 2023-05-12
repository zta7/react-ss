import * as MenuPrimitive from '@radix-ui/react-menu'
import { styled, CSS } from 'core/stitches.config'

// export const baseItemCss = css({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   fontFamily: '$untitled',
//   fontSize: '$1',
//   fontVariantNumeric: 'tabular-nums',
//   lineHeight: '1',
//   cursor: 'default',
//   userSelect: 'none',
//   whiteSpace: 'nowrap',
//   height: '$5',
//   px: '$5'
// })

// export const itemCss = css(baseItemCss, {
//   position: 'relative',
//   color: '$hiContrast',

//   '&[data-highlighted]': {
//     outline: 'none',
//     backgroundColor: '$blue9',
//     color: 'white'
//   },

//   '&[data-disabled]': {
//     color: '$slate9'
//   }
// })

// export const labelCss = css(baseItemCss, {
//   color: '$slate11'
// })

// export const menuCss = css({
//   boxSizing: 'border-box',
//   minWidth: 120,
//   py: '$1'
// })

// export const separatorCss = css({
//   height: 1,
//   my: '$1',
//   backgroundColor: '$slate6'
// })

export const Menu = MenuPrimitive.Root
export const MenuTrigger = styled(MenuPrimitive.MenuAnchor)
export const MenuContent = styled(MenuPrimitive.Content)
export const MenuItem = styled(MenuPrimitive.Item)
export const MenuLabel = styled(MenuPrimitive.Label)
export const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {})
export const MenuGroup = styled(MenuPrimitive.Group)
