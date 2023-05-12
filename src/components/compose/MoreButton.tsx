import {
  EllipsisHorizontalIcon,
  LockClosedIcon
} from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
import { ItemSection } from 'components/widget/item/item'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator
} from 'components/widget/menu'
import { Separator } from 'components/widget/separator'
import { MdDownload, MdLockOutline } from 'react-icons/md'

export const MoreButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton>
          <EllipsisHorizontalIcon />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            <ItemSection>
              <div>123</div>
            </ItemSection>
            <ItemSection>
              <div>123</div>
            </ItemSection>
            <ItemSection>
              <div>123</div>
            </ItemSection>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            <MdDownload />
            <div>label</div>
            <div>label2</div>
          </DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <MdLockOutline />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
              <DropdownMenuItem>123</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
