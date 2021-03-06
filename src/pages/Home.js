import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/listOfPhotoCard'

export const Home = (props) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={props.idPet} />
    </Fragment>
  )
}

