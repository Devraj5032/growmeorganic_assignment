import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div className='flex justify-center items-center min-h-screen w-[100%]'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home  />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
