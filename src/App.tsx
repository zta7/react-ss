import { Box } from 'components/widget/box'
import { Checkbox } from 'components/widget/checkbox'
import { Label } from 'components/widget/label'
import { Separator } from 'components/widget/separator'
import { HStack, Stack } from 'components/widget/stack'
import { Text } from 'components/widget/text'
import { useMeasure } from 'hooks/use-measure'
import { useState } from 'react'

function App() {
  const [ref, rect] = useMeasure()
  const [b, setB] = useState()
  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <HStack>
        <HStack>
          <Checkbox id="1" />
          <Label htmlFor="1">123</Label>
        </HStack>
        <Separator orientation="vertical" />
        <HStack>
          <Checkbox id="2" />
          <Label htmlFor="2">123</Label>
        </HStack>
      </HStack>
    </div>
  )
}

export default App
