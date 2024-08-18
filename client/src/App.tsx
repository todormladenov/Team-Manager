import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CreateTeam from './components/teams/CreateTeam'
import EditTeam from './components/teams/EditTeam'

function App() {
  return (
    <>
      <Header />

      <div id="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/teams/create-team' element={<CreateTeam />} />
          <Route path='/teams/edit-team/:teamId' element={<EditTeam />} />
        </Routes>
      </div>
    </>
  )
}

export default App
