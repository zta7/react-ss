import { ToastProvider } from '@radix-ui/react-toast'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ReactNode, createContext } from 'react'
import { ToastViewport } from '../toast'

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TooltipProvider delayDuration={500} skipDelayDuration={200}>
        <ToastProvider duration={10 * 1000}>
          {children}
          {/* <ToastInstancesProvider>{children}</ToastInstancesProvider> */}
          <ToastViewport />
        </ToastProvider>
      </TooltipProvider>
    </>
  )
}
