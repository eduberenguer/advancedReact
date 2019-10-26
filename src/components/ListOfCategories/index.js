import React from 'react'
import { Category } from '../Category'
import { categories } from '../../../api/db'

import { List } from './styles'
import { Item } from './styles'

export const ListOfCategories = () => {
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
