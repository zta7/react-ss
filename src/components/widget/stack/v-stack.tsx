import { Stack, type StackProps } from 'components/widget/stack/stack'

type VStackProps = Omit<StackProps, 'direction'>

export const VStack = (props: VStackProps) => {
  return <Stack orientation="vertical" {...props}></Stack>
}

VStack.displayname = 'VStack'
