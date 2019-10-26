import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List } from './styles'
import { Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect( () => {
    window.fetch('https://petgram-server.eddiberenguer.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  },[])

  return (
    <List>
      {
        categories.map((category) => (
          <Item key={category.id}><Category {...category} /></Item>
        ))
      }
    </List>
  )
}
