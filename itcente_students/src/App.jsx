
import './App.scss'
import Admin from './components/Admin/Admin'
import Auth from './components/Auth';
import Register from './components/Register/Register'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App
