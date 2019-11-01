import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '@reach/router'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, ImgWrapper, Button, Img } from './styles'
import { FavButton } from '../FavButton'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

//const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = (props) => {
  const key = `like-${props.id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} alt={props.id} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id: props.id }
                    }})
                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={props.likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}

