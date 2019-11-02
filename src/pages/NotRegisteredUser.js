import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'


import { UserForm } from '../components/UserForm'
import { Register } from '../container/RegisterMutation'
import { Login } from '../container/LoginMutation'


export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return  <Fragment>
    <Register>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = {email, password}
            const variables = { input }
            register({ variables })
              .then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
          }
          const errorMsg = error && 'El usuario ya existe o no se ha podido realizar el registro'
          return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit}/>
        }
      }
    </Register>
    <Login>
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = {email, password}
            const variables = { input }
            login({ variables })
              .then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
          }
          const errorMsg = error && 'Usuario no encontrado o errores en las crendenciales'
          return <UserForm disabled={loading} error={errorMsg} title={'Iniciar Sesion'} onSubmit={onSubmit}/>
        }
      }
    </Login>
  </Fragment>
}
