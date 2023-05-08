import { Box } from 'components/widget/box'
import { Button, IconButton } from 'components/widget/button'
import { Checkbox } from 'components/widget/checkbox'
import { Label } from 'components/widget/label'
import { Separator } from 'components/widget/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from 'components/widget/tabs'
import { Text } from 'components/widget/text'
// import { useMeasure } from 'hooks/use-measure'
import { useState } from 'react'
import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid'
import { Switch } from 'components/widget/switch'
import { Dialog, DialogContent, DialogTrigger } from 'components/widget/dialog'
import { DialogTitle } from 'components/widget/dialog'
import { DialogDescription } from 'components/widget/dialog'
import { ThemeButton } from 'components/compose/ThemeButton'
import { Card } from 'components/widget/card'
import { Flex } from 'components/widget/flex'

function App() {
  // const [ref, rect] = useMeasure()
  const [b, setB] = useState()
  return (
    <Box
      css={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '$base1',
        color: '$base12'
      }}
    >
      <Flex>
        <Flex>
          <Checkbox id="1" />
          <Label htmlFor="1">123</Label>
        </Flex>
        <Separator orientation="vertical" />
        <Flex>
          <Checkbox id="2" />
          <Label htmlFor="2">123</Label>
        </Flex>
      </Flex>
      <Tabs>
        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
        </TabsList>
        <TabsContent value="1">C</TabsContent>
        <TabsContent value="2">DDDDDDD</TabsContent>
      </Tabs>
      <IconButton>
        <BeakerIcon />
      </IconButton>
      <Switch />
      <Dialog>
        <DialogTrigger>Dialog Trigger</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>~~~</DialogDescription>
        </DialogContent>
      </Dialog>
      <ThemeButton />
      <Button>Button</Button>
    </Box>
  )
}

export default App
