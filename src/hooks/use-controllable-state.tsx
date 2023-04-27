// /* eslint-disable @typescript-eslint/no-empty-function */
// import { useCallbackRef } from 'hooks/use-callback-ref'
// import { useEffect, useRef, useState } from 'react'

// type UseControllableStateParams<T> = {
//   state?: T | undefined
//   defaultState?: T | undefined
//   onStateChange?: (state: T) => void
// }

// export function useControllableState<T>({
//   state,
//   onStateChange = () => {},
//   defaultState
// }: UseControllableStateParams<T>) {
//   const [uncontrolledState, setUncontrolledState] = useState<T | undefined>(
//     defaultState
//   )
//   const isControlled = state !== undefined

//   const value = isControlled ? state : uncontrolledState
//   const setValue = isControlled ? onStateChange : setUncontrolledState

//   return [value, setValue] as const
// }

// // export interface useUncontrolledStateProps<T> {
// //   defaultProp?: T
// //   onChange?: (state: T) => void
// // }

// // export function useUncontrolledState<T>({
// //   defaultProp,
// //   onChange
// // }: useUncontrolledStateProps<T>) {
// //   const uncontrolledState = useState<T | undefined>(defaultProp)
// //   const [value] = uncontrolledState
// //   const prevValueRef = useRef(value)
// //   const handleChange = useCallbackRef(onChange)

// //   useEffect(() => {
// //     if (prevValueRef.current !== value) {
// //       handleChange(value as T)
// //       prevValueRef.current = value
// //     }
// //   }, [value, prevValueRef, handleChange])

// //   return uncontrolledState
// // }
