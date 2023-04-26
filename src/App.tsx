import { Sortable } from 'components/widget/dnd/sortable'

function App() {
  const arr = Array.from({ length: 20 }, (e, i) => ({ id: `${i}` }))

  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <Sortable></Sortable>
    </div>
  )
}

export default App
