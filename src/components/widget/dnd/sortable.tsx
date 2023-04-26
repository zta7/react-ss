import { Collection } from 'components/widget/collection/collection'
import { CollectionItem } from 'components/widget/collection/collection-item'
import { DndProvider } from 'components/widget/dnd/dnd-context'
import { Draggable } from 'components/widget/dnd/draggable'
import { Droppable } from 'components/widget/dnd/droppable'
import { HTMLAttributes, forwardRef } from 'react'

export interface SortableProps extends HTMLAttributes<HTMLDivElement> {
  direction: 'horizontal' | 'vertical'
  items: []
}

export const Sortable = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(() => {
  const items = [1, 2, 3, 4]
  return <DndProvider>123</DndProvider>
})

Sortable.displayName = 'Sortable'
