import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, ImgWrapper, Button, Img } from './styles'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ src = DEFAULT_IMAGE, likes = 0, ...props }) => {
  const key = `like-${props.id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${props.id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} alt={props.id} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
