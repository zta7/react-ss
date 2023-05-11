import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { IconButton } from 'components/widget/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from 'components/widget/menu'
export const MoreButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton>
          <EllipsisHorizontalIcon />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuItem>123</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>~~~~~</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
            <DropdownMenuItem>123</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
