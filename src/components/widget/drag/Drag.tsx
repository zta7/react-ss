import { useSpring, animated, SpringConfig } from '@react-spring/web'
import { useDrag, DragConfig } from '@use-gesture/react'
import { HTMLAttributes, ReactNode, forwardRef, useState } from 'react'

export const Drag = forwardRef<
  HTMLDivElement,
  DragConfig & { children: ReactNode }
>((props, forwardRef) => {
  const { children, ...config } = props
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const [dragging, setDragging] = useState(false)

  const dragBind = useDrag(({ movement: [mx, my], dragging, last }) => {
    setDragging(Boolean(dragging))
    api.start({ x: !last ? mx : 0, y: !last ? my : 0 })
  }, config)

  return (
    <animated.div
      {...dragBind()}
      className={`touch-none ${dragging ? 'cursor-grab' : 'cursor-grabbing'}`}
      style={{ x, y }}
      ref={forwardRef}
    >
      {children}
    </animated.div>
  )
})

Drag.displayName = 'Drag'
