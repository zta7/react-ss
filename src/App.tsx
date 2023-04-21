import { Button } from 'components/widget/button'
import { ButtonLoading } from 'components/widget/button/button-loading'
import { ScrollArea } from 'components/widget/scrollarea'

function App() {
  const arr = Array.from({ length: 100 }, (e, i) => ({ id: i }))

  return (
    <div
      className="text-base-600 h-screen w-screen select-none overflow-hidden text-sm"
      id="app"
    >
      <Button>
        <ButtonLoading>123</ButtonLoading>
      </Button>
    </div>
  )
}

export default App
