import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import CreateTeam from './components/teams/create-team/CreateTeam'
import EditTeam from './components/teams/EditTeam'
import TeamsCatalog from './components/teams/teams-catalog/TeamsCatalog'
import TeamDetails from './components/teams/team-details/TeamDetails'
import { AuthContextProvider } from './components/context/AuthContext'
import MyTeams from './components/teams/my-teams/MyTeams'
import Footer from './components/footer/Footer'
import AuthView from './components/rout-guard/AuthView'

function App() {
  return (
    <>
      <AuthContextProvider>

        <Header />

        <div id="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/teams' element={<TeamsCatalog />} />
            <Route path='/teams/details/:teamId' element={<TeamDetails />} />

            <Route element={<AuthView />} >
              <Route path='/teams/create-team' element={<CreateTeam />} />
              <Route path='/teams/edit-team/:teamId' element={<EditTeam />} />
              <Route path='/teams/my-teams' element={<MyTeams />} />
            </Route>

          </Routes>
        </div>
      </AuthContextProvider>

      <Footer />
    </>
  )
}

export default App
