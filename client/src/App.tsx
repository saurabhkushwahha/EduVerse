import Login from '@/pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import { useUserStore } from './store/useUserStore'
import ButtonTheme from './components/theme/ButtonTheme'
import {SunIcon} from 'lucide-react'

function App() {
  const { user } = useUserStore()
  return (
    <>
      <div className='relative overflow-hidden min-h-screen '>
        <ButtonTheme />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/signup' element={!user ? <SignUp /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
