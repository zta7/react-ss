import { useMemo } from 'react'
import { useLayoutEffect, useState } from 'react'

export type UseMeasureRect = Omit<DOMRectReadOnly, 'toJSON'>

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

export function useMeasure<E extends Element = Element>() {
  const [element, ref] = useState<E | null>()
  const [rect, setRect] = useState<UseMeasureRect>(defaultState)

  const observer = useMemo(
    () =>
      new ResizeObserver((entries) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } =
            entries[0].contentRect
          setRect({ x, y, width, height, top, left, bottom, right })
        }
      }),
    []
  )
  useLayoutEffect(() => {
    if (element) {
      observer.observe(element)
    }
    return () => void observer.disconnect()
  }, [element, observer])

  return [ref, rect] as const
}
