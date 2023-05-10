import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
import { Menu, MenuContent, MenuTrigger } from 'components/widget/menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from 'components/widget/popover'

export const MoreButton = () => {
  return (
    <Menu>
      <MenuTrigger>
        <IconButton>
          <EllipsisHorizontalIcon />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <div>70487192749127</div>
      </MenuContent>
    </Menu>
  )
}
