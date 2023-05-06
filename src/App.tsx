import { Box } from 'components/widget/box'
import { Button, IconButton } from 'components/widget/button'
import { Checkbox } from 'components/widget/checkbox'
import { Label } from 'components/widget/label'
import { Separator } from 'components/widget/separator'
import { HStack } from 'components/widget/stack'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from 'components/widget/tabs'
import { Text } from 'components/widget/text'
// import { useMeasure } from 'hooks/use-measure'
import { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Kbd } from 'components/widget/kdb'

function App() {
  // const [ref, rect] = useMeasure()
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
      <Tabs>
        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
        </TabsList>
        <TabsContent value="1">C</TabsContent>
        <TabsContent value="2">DDDDDDD</TabsContent>
      </Tabs>
      <IconButton state="waiting">
        <BeakerIcon />
      </IconButton>
    </div>
  )
}

export default App
