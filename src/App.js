import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

/*const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}*/

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:idPet' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}
