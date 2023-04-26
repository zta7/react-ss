import { useDraggable } from 'components/widget/dnd/dnd-context'
import { useComposedRefs } from 'hooks/use-compose-refs'
import {
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useMemo
} from 'react'

export interface DraggableData {
  dropTo: Array<string> | undefined
  dropData: object
}

export interface DraggableProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  children: ReactNode
  data: DraggableData
}

export const Draggable = forwardRef<HTMLDivElement, DraggableProps>(
  (props, forwardRef) => {
    const { children, id, data } = props

    const { attributes, listeners, setNodeRef, transform, isDragging } =
      useDraggable({
        id,
        data
      })

    const style = useMemo(() => {
      return transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
          }
        : undefined
    }, [transform])

    const ref = useComposedRefs<HTMLDivElement>(forwardRef, setNodeRef)

    return (
      <div
        className={`touch-none ${
          isDragging ? 'cursor-grab' : 'cursor-grabbing'
        }`}
        ref={ref}
        {...listeners}
        {...attributes}
        style={style}
      >
        {children}
      </div>
    )
  }
)

Draggable.displayName = 'Draggable'
