import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectScreen from './screens/ProjectScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/projects/:id' exact element={<ProjectScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
