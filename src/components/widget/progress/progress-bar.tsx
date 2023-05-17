import * as Progress from '@radix-ui/react-progress'
import { styled } from 'core/stitches.config'
import { forwardRef } from 'react'

const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$base7',
  borderRadius: '99999px',
  width: 300,
  height: 25,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)'
})

const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$base12',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
})

export const ProgressBar = () => {
  return (
    <ProgressRoot value={50}>
      <ProgressIndicator style={{ transform: `translateX(-${100 - 50}%)` }} />
    </ProgressRoot>
  )
}
