import { useSpring, animated, SpringConfig } from '@react-spring/web'
import { useDrag, DragConfig } from '@use-gesture/react'
import { useDraggable } from 'components/widget/dnd/dnd-context'
import { useComposedRefs } from 'hooks/use-compose-refs'
import { ReactNode, forwardRef, useEffect } from 'react'

interface DraggableProps {
  id: string
  children: ReactNode
}

export const Draggable = forwardRef<HTMLDivElement, DraggableProps>(
  (props, forwardRef) => {
    const { children, id } = props
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const { attributes, listeners, setNodeRef, transform, isDragging } =
      useDraggable({
        id,
        data: {
          supports: ['type1', 'type2']
        }
      })

    useEffect(() => {
      api.start({
        x: transform ? transform.x : 0,
        y: transform ? transform.y : 0
      })
    }, [transform, api])

    const ref = useComposedRefs<HTMLDivElement>(forwardRef, setNodeRef)

    return (
      <animated.div
        className={`touch-none ${
          isDragging ? 'cursor-grab' : 'cursor-grabbing'
        }`}
        style={{ x, y }}
        ref={ref}
        {...listeners}
        {...attributes}
      >
        {children}
      </animated.div>
    )
  }
)

Draggable.displayName = 'Draggable'
