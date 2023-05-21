import { createRoot } from 'react-dom/client'
import 'index.css'
import App from 'App'
import { GlobalProvider } from 'components/widget/provider'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <GlobalProvider>
    <App />
    <div>123</div>
  </GlobalProvider>
)
