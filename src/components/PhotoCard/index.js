import React from 'react'

import { MdFavoriteBorder } from 'react-icons/md'

import { ImgWrapper, Button, Img } from './styles'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ src = DEFAULT_IMAGE, likes = 0, ...props }) => {
  return (
    <article>
      <a href={`/detail/${props.id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} alt={props.id} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
