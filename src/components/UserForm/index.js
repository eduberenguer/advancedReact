import React, {Fragment} from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

import { Input, Form, Title, Error} from './styles'

export const UserForm = (props) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({
      email: email.value,
      password: password.value
    })
  }


  return(
    <Fragment>
      <Title>{props.title}</Title>
      <Form disabled={props.disabled} onSubmit={handleSubmit}>
        <Input disabled={props.disabled} placeholder='Email' value={email.value} onChange={email.onChange} />
        <Input disabled={props.disabled} type='password' placeholder='Password' value={password.value} onChange={password.onChange} />
        <SubmitButton disabled={props.disabled} >{props.title}</SubmitButton>
      </Form>
      {props.error && <Error>{props.error}</Error>}
    </Fragment>
  )
}
