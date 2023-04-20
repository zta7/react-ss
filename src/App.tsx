import { ScrollArea } from 'components/widget/scrollarea'

function App() {
  const arr = Array.from({ length: 100 }, (e, i) => ({ id: i }))

  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <ScrollArea>
        {arr.map((e) => (
          <a key={e.id} href={`#${e.id}`}>
            {e.id}
          </a>
        ))}
      </ScrollArea>
    </div>
  )
}

export default App
