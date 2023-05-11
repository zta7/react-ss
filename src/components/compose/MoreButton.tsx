import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
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
        <DropdownMenuGroup>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
          <DropdownMenuItem>123</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>~~~~~</DropdownMenuSubTrigger>
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
