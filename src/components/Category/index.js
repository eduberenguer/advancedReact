import React from 'react'
import { Anchor, Image } from './styles'

//const DEFAULT_IMAGE = 'http://i.imgur.com/dJa0Hpl.jpg'

export const Category = (props) => (
  <Anchor>
    <Image src={props.cover} />
    {props.emoji}
  </Anchor>

)


/*export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)*/
