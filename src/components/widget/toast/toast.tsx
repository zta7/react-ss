import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, mauve, slate, green } from '@radix-ui/colors'
import { ComponentProps, forwardRef } from 'react'

const VIEWPORT_PADDING = 12
const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' }
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
})

type ToastProps = ComponentProps<typeof ToastPrimitive.Root> & {
  title: string
}

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none'
})

export const Toast = ({ title, ...props }: ToastProps) => {
  return (
    <ToastPrimitive.Root {...props}>
      {title && <ToastPrimitive.Title>{title}</ToastPrimitive.Title>}
      {/* <ToastPrimitive.Description>{content}</ToastPrimitive.Description> */}
      {/* {children && (
        <ToastPrimitive.Action asChild>{children}</ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close aria-label="Close">
        <span aria-hidden>×</span>
      </ToastPrimitive.Close> */}
    </ToastPrimitive.Root>
  )
}

export const useToast = () => {
  // eslint-disable-next-line react/jsx-key
  return [<ToastPrimitive.Provider>123</ToastPrimitive.Provider>, 123] as const
}

// export const useToast = () => {
//   return {
//     create: ''
//   }
// }

// export const ToastProvider = () => {
//   return [<ToastPrimitive.Provider>123</ToastPrimitive.Provider>, 123]
// }

// export const ToastViewport = styled(ToastPrimitive.Viewport, {
//   position: 'fixed',
//   bottom: 0,
//   right: 0,
//   display: 'flex',
//   flexDirection: 'column',
//   padding: VIEWPORT_PADDING,
//   gap: 10,
//   width: 390,
//   maxWidth: '100vw',
//   margin: 0,
//   listStyle: 'none',
//   zIndex: 2147483647,
//   outline: 'none'
// })

// export const ToastRoot = styled(ToastPrimitive.Root, {
//   backgroundColor: 'white',
//   borderRadius: 6,
//   boxShadow:
//     'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
//   padding: 15,
//   display: 'grid',
//   gridTemplateAreas: '"title action" "description action"',
//   gridTemplateColumns: 'auto max-content',
//   columnGap: 15,
//   alignItems: 'center',

//   '&[data-state="open"]': {
//     animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
//   },
//   '&[data-state="closed"]': {
//     animation: `${hide} 100ms ease-in`
//   },
//   '&[data-swipe="move"]': {
//     transform: 'translateX(var(--radix-toast-swipe-move-x))'
//   },
//   '&[data-swipe="cancel"]': {
//     transform: 'translateX(0)',
//     transition: 'transform 200ms ease-out'
//   },
//   '&[data-swipe="end"]': {
//     animation: `${swipeOut} 100ms ease-out`
//   }
// })

// export const ToastTitle = styled(ToastPrimitive.Title, {
//   gridArea: 'title',
//   marginBottom: 5,
//   fontWeight: 500,
//   color: slate.slate12,
//   fontSize: 15
// })

// export const ToastDescription = styled(ToastPrimitive.Description, {
//   gridArea: 'description',
//   margin: 0,
//   color: slate.slate11,
//   fontSize: 13,
//   lineHeight: 1.3
// })

// export const ToastAction = styled(ToastPrimitive.Action, {
//   gridArea: 'action'
// })
