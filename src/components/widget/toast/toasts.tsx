import { Toast } from './toast'
import { useToastStore } from './toast-store'

export const Toasts = () => {
  const { toasts } = useToastStore()
  return (
    <>
      {toasts.map((e) => {
        return <Toast title="123" key={e.id} />
      })}
    </>
  )
}
