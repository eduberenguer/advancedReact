import React, {Fragment, useEffect, useState} from 'react'
import { Category } from '../Category'

import { List, Item, Loader, override } from './styles'
import { ClipLoader } from 'react-spinners'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.eddiberenguer.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 325
      if(showFixed !== newShowFixed) setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loader key={loading}>
            <ClipLoader
              css={override}
              sizeUnit='px'
              size={150}
              color='#123abc'
              loading={loading}
            />
          </Loader>
          : categories.map((category) => (
            <Item key={category.id}><Category {...category} /></Item>
          ))
      }
    </List>
  )


  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
