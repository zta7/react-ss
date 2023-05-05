import { Stack, type StackProps } from 'components/widget/stack/stack'

type HStackProps = Omit<StackProps, 'orientation'>

export const HStack = (props: HStackProps) => {
  return <Stack orientation="horizontal" {...props}></Stack>
}

HStack.displayname = 'HStack'
