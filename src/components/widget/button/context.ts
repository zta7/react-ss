import { createContext } from 'hooks/context'

export interface ButtonContextValue {}

export const [ButtonProvider, useButton] =
  createContext<ButtonContextValue>('ButtonRoot')
