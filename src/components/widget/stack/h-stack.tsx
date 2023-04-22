import { stack, type StackProps } from 'components/widget/stack/stack'

type HStackProps = Omit<StackProps, 'direction'>

export const HStack = ({ children, ...style }: HStackProps) => {
  return <div className={stack({ direction: 'row', ...style })}>{children}</div>
}

HStack.displayname = 'HStack'
