import { useMeasure } from 'hooks/use-measure'

function App() {
  const { ref } = useMeasure()
  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <div ref={ref}>123</div>
    </div>
  )
}

export default App
