import { createContext } from 'hooks/context'

export interface ButtonContextValue {
  isDisabled?: boolean
  isLoading?: boolean
}

export const [ButtonProvider, useButton] =
  createContext<ButtonContextValue>('ButtonRoot')
