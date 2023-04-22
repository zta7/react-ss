import {
  CollectionContextValue,
  CollectionProvider
} from 'components/widget/collection/collection-context'
import { MutableRefObject, useRef } from 'react'
import { Children, ReactNode, useEffect } from 'react'

export const Collection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLElement>(null)
  const items = useRef<CollectionContextValue['items']>(new Map()).current
  return (
    <CollectionProvider collectionRef={ref} items={items}>
      {children}
    </CollectionProvider>
  )
}

Collection.displayName = 'Collection'
