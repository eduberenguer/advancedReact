import React,{ Fragment } from 'react'

import { Link } from '../components/NavBar/styles'


export const NotFound = () => {
  return(
    <Fragment>
      <h1>Esta página no existe</h1>
      <Link to='/'>Home</Link>
    </Fragment>
  )
}
