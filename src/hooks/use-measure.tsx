import { useMemo } from 'react'
import { useLayoutEffect, useState } from 'react'

export const useMeasure = () => {
  const [element, ref] = useState<Element | null>(null)
  const [rect, setRect] = useState()
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
  // useLayoutEffect(() => {
  //   if(element) {

  //   }
  // }, [element])

  return { ref }
}
