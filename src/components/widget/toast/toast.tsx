import * as ToastPrimitive from '@radix-ui/react-toast'
import { forwardRef, useImperativeHandle, useState } from 'react'

export const Toast = forwardRef((props, forwardedRef) => {
  const { children, ...toastProps } = props
  const [count, setCount] = useState(0)

  useImperativeHandle(forwardedRef, () => ({
    publish: () => setCount((count) => count + 1)
  }))

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ToastPrimitive.Root key={index} {...toastProps}>
          <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
          <ToastPrimitive.Close>Dismiss</ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
    </>
  )
})

Toast.displayName = 'Toast'
