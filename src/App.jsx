import {Routes, Route} from 'react-router-dom'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Gallery/>}/>
      </Routes>
    </>
  )
}

export default App
