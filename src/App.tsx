import { Button } from 'components/widget/button'
import { ButtonLoading } from 'components/widget/button/button-loading'
import { ScrollArea } from 'components/widget/scrollarea'
import { HStack, VStack } from 'components/widget/stack'
import { Collection } from 'components/widget/collection/collection'
import { Hooks } from 'tips/Hooks'
import { Draggable } from 'components/widget/dnd/draggable'
import { DndProvider } from 'components/widget/dnd/dnd-context'
import { Droppable } from 'components/widget/dnd/droppable'

function App() {
  const arr = Array.from({ length: 20 }, (e, i) => ({ id: `${i}` }))

  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <DndProvider>
        {arr.map((e) => {
          return (
            <Droppable id={e.id} key={e.id}>
              <Draggable id={e.id}>123</Draggable>
            </Droppable>
          )
        })}
      </DndProvider>
    </div>
  )
}

export default App
