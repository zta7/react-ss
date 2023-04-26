import { useCollection } from 'components/widget/collection/collection-context'
import { ReactNode, useEffect, useRef } from 'react'

export interface CollectionItemProps {
  children: ReactNode
}

export const CollectionItem = ({ children }: CollectionItemProps) => {
  const context = useCollection('CollectionItem')
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    context.items.set(ref, { ref, data: '~' })
    return () => {
      context.items.delete(ref)
    }
  })
  return <div ref={ref}>{children}</div>
}
