import { createContext } from 'hooks/create-context'
import { RefObject } from 'react'

export interface CollectionContextValue {
  collectionRef: RefObject<HTMLElement>
  items: Map<
    RefObject<HTMLElement>,
    { ref: RefObject<HTMLElement>; data: unknown }
  >
}

export const [CollectionProvider, useCollection] =
  createContext<CollectionContextValue>('CollectionRoot')
