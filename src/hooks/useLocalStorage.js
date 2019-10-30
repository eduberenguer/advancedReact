import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    }catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = newItem => {
    try{
      window.localStorage.setItem(key, JSON.stringify(newItem))
      setValue(newItem)
    }catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
