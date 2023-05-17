import { ToastProvider } from '@radix-ui/react-toast'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider delayDuration={500} skipDelayDuration={200}>
      <ToastProvider duration={10 * 1000}>{children}</ToastProvider>
    </TooltipProvider>
  )
}
