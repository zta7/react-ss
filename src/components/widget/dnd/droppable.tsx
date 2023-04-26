import { useDroppable } from '@dnd-kit/core'
import { cx } from 'class-variance-authority'
import { useComposedRefs } from 'hooks/use-compose-refs'
import { forwardRef, ReactNode, useMemo } from 'react'

export interface DroppableProps {
  id: string
  children: ReactNode
}

export const Droppable = forwardRef<HTMLDivElement, DroppableProps>(
  ({ id, children }, forwardRef) => {
    const { setNodeRef, active, isOver } = useDroppable({
      id
    })

    if (isOver) {
      console.log(id)
    }

    // const canDrop = useMemo(
    //   () => getCanDrop({ active, overId: id }),
    //   [id, active]
    // )

    // const _className = useMemo(() => {
    //   const arr = [className]
    //   if (canDrop) {
    //     if (isOver) arr.push('outline outline-primary -outline-offset-1')
    //     else arr.push('outline outline-secondary -outline-offset-1')
    //   }
    //   // asChild && arr.push(children.props.className);
    //   return cx(arr)
    // }, [canDrop, isOver, className])

    // const childrenRef = (children as any).ref;
    // const ref = useMemo(() => mergeRefs([setNodeRef, childrenRef, propRef]), [setNodeRef, childrenRef, propRef]);
    // if (asChild) {
    //   return React.cloneElement(
    //     children,
    //     { ref, ...children.props, className: _className },
    //   );
    // }
    const ref = useComposedRefs<HTMLDivElement>(forwardRef, setNodeRef)

    return <div ref={ref}>{children}</div>
  }
)

Droppable.displayName = 'Droppable'
