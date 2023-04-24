import { Button } from 'components/widget/button'
import { ButtonLoading } from 'components/widget/button/button-loading'
import { ScrollArea } from 'components/widget/scrollarea'
import { HStack, VStack } from 'components/widget/stack'
import { Collection } from 'components/widget/collection/collection'
import { Hooks } from 'tips/Hooks'
import { Drag } from 'components/widget/dnd/drag'
import { DndProvider } from 'components/widget/dnd/dnd-context'

function App() {
  const arr = Array.from({ length: 100 }, (e, i) => ({ id: i }))

  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <DndProvider>
        <Drag>drag me</Drag>
      </DndProvider>
    </div>
  )
}

export default App
