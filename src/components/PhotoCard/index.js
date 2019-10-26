import React, { Fragment, useEffect, useRef, useState } from 'react'

import { MdFavoriteBorder } from 'react-icons/md'

import { Article, ImgWrapper, Button, Img } from './styles'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ src = DEFAULT_IMAGE, likes = 0, ...props }) => {
  const element = useRef(null)
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if(isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  },[element])

  return (
    <Article ref={element}>
      {
        show && <Fragment>
                <a href={`/detail/${props.id}`}>
                <ImgWrapper>
                  <Img src={DEFAULT_IMAGE} alt={props.id} />
                </ImgWrapper>
                </a>
                <Button><MdFavoriteBorder size='32px' />{likes} likes!</Button>
              </Fragment>
      }
    </Article>
  )
}
