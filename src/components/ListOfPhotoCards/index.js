import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return(
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7].map((index) => (
          <li key={index}><PhotoCard /></li>
        ))
      }
    </ul>
  )
}
