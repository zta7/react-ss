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
import { Grid } from 'components/widget/grid'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from 'components/widget/popover'
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger
} from 'components/widget/tooltip'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'components/widget/according/according'
import { Item } from 'components/widget/item/item'
import { Input } from 'components/widget/input'
import { MoreButton } from 'components/compose/MoreButton'
function App() {
  // const [ref, rect] = useMeasure()
  const [b, setB] = useState()
  return (
    <Box
      id="app"
      css={{
        display: 'grid',
        gridTemplateAreas: `
          "nav header header"
          "nav main side"
          "nav main side"`,
        gridTemplateRows: '45px 1fr 30px',
        gridTemplateColumns: '240px 1fr 30px',
        userSelect: 'none',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '$base1',
        color: '$base11',
        fontSize: '0.85rem'
      }}
    >
      <Flex css={{ gridArea: 'nav', backgroundColor: '$base1' }}>
        <Box css={{ flexGrow: 1 }}>
          <Item>123</Item>
          <Item state={'active'}>123</Item>
        </Box>
        <Separator orientation="vertical" />
      </Flex>
      <Flex
        css={{ gridArea: 'header', px: '$6' }}
        justify="between"
        align="center"
      >
        <Box>123</Box>
        <Flex>
          <ThemeButton />
          <MoreButton />
        </Flex>
      </Flex>
      <Box css={{ gridArea: 'main' }}>
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
        <Tabs orientation="vertical">
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
        <Popover>
          <PopoverTrigger>Popover Trigger</PopoverTrigger>
          <PopoverContent>
            <div>CCC</div>
            {/* <DialogTitle>Title</DialogTitle>
            <DialogDescription>~~~</DialogDescription> */}
          </PopoverContent>
        </Popover>
        <Tooltip>
          <TooltipTrigger>TooltipTrigger</TooltipTrigger>
          <TooltipContent>123</TooltipContent>
        </Tooltip>
        <Button>Button</Button>
        <Accordion type="multiple">
          <AccordionItem value="1">
            <AccordionTrigger>123</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Input placeholder="hell" />
      </Box>
      <Box css={{ gridArea: 'side' }}>Side</Box>

      {/* <Box className="overlay-container" css></Box> */}
    </Box>
  )
}

export default App
