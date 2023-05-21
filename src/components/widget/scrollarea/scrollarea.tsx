import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { violet, mauve, blackA } from '@radix-ui/colors'
import { ComponentProps, ReactNode } from 'react'
import { CSS, styled } from 'core/stitches.config'

type Props = { children: ReactNode; css: CSS } & ComponentProps<
  typeof ScrollAreaPrimitive.Root
>

const ScrollArea = ({ children, ...props }: Props) => (
  <ScrollAreaRoot {...props}>
    <ScrollAreaViewport>
      {children}
      {/* <Box style={{ padding: '15px 20px' }}>
        <Text>Tags</Text>
        {TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Box> */}
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    {/* <ScrollAreaCorner /> */}
  </ScrollAreaRoot>
)

const SCROLLBAR_SIZE = 12

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  // width: 200,
  // height: 225,
  // borderRadius: 4,
  overflow: 'hidden'
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  // backgroundColor: 'white'
})

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%'
  // borderRadius: 'inherit'
})

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  // background: '$base6',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$base8' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE
  }
})

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$base10',
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative'
  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: '100%',
  //   height: '100%',
  //   minWidth: 44,
  //   minHeight: 44
  // }
})

// const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner, {
//   background: blackA.blackA8
// })

export { ScrollArea }
