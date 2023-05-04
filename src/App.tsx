import { Checkbox } from 'components/widget/checkbox'
import { Label } from 'components/widget/label'
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
      <Checkbox />
    </div>
  )
}

export default App
