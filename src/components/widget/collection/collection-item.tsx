import { useCollection } from 'components/widget/collection/collection-context'
import { useEffect, useRef } from 'react'

export const CollectionItem = () => {
  const context = useCollection('CollectionItem')
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    context.items.set(ref, { ref, data: '~' })
    return () => {
      context.items.delete(ref)
    }
  })
  return <div ref={ref}>123</div>
}
