import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectScreen from './screens/ProjectScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
