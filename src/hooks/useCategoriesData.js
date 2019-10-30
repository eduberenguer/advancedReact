import { useState, useEffect } from 'react'

export const useCategoriesData = (url) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      window.fetch(url)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }, [])
  
    return [ categories, loading ]
  }