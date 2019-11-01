import React from 'react'

import { Button } from '../PhotoCard/styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = (props) => {
  const Icon = props.liked ? MdFavorite : MdFavoriteBorder

  return(
    <Button onClick={props.onClick}>
      <Icon size='32px' />{props.likes} likes!
    </Button>
  )
}

