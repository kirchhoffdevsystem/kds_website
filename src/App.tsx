import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />  {/* Componente que contém as rotas */}
    </BrowserRouter>
  )
}

export default App
