import React from 'react'
import { Link, Image } from './styles'

//const DEFAULT_IMAGE = 'http://i.imgur.com/dJa0Hpl.jpg'

export const Category = (props) => (
  <Link to={props.path}>
    <Image src={props.cover} />
    {props.emoji}
  </Link>

)


/*export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)*/
