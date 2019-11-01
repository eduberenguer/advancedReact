import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { ClipLoader } from 'react-spinners'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import {override} from '../components/ListOfCategories/styles'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return (
      <ClipLoader
        css={override}
        sizeUnit='px'
        size={150}
        color='#123abc'
        loading={loading}
      />
    )
  }
  if (error) return <p>{error}</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}


export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
