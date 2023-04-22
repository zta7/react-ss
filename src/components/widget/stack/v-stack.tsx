import { stack, type StackProps } from 'components/widget/stack/stack'

type VStackProps = Omit<StackProps, 'direction'>

export const VStack = ({ children, ...style }: VStackProps) => {
  return <div className={stack({ direction: 'col', ...style })}>{children}</div>
}

VStack.displayname = 'VStack'
