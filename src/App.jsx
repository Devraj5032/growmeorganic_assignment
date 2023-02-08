import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <div className='flex justify-center items-center min-h-screen'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
