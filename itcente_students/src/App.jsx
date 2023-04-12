
import './App.scss'
import Admin from './components/Admin/Admin'
import Register from './components/Register/Register'
import {Routes, Route} from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <Routes>
          <Route path="/"  element={<Register/>}  />
          <Route path='admin'  element={<Admin/>} />
        </Routes>
        
    </div>
  )
}

export default App
