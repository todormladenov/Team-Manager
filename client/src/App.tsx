import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/auth/Login'

function App() {
  return (
    <>
      <Header />

      <div id="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
