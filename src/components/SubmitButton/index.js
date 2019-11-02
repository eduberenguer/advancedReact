import React from 'react'
import { Button } from './styles'

export const SubmitButton = (props) => {
  return <Button disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </Button>
}
