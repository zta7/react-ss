import { useEffect, useRef, useState } from 'react'

export const Hooks = () => {
  const [a, setA] = useState('')
  const [w, setW] = useState(window.innerWidth)
  const v = useRef({ a: 2 }).current
  const r = useRef({ a: 2 })

  useEffect(() => {
    console.log('render')
  })

  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    console.log('mounted')
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])

  return (
    <div className="row gap-1">
      <button onClick={() => setA('1')}>1</button>
      <button onClick={() => setA('2')}>2</button>
      <button
        onClick={() => {
          v.a = 1
        }}
      >
        RV
      </button>
      <button
        onClick={() => {
          r.current.a = 1
        }}
      >
        R
      </button>
      <div></div>
    </div>
  )
}
