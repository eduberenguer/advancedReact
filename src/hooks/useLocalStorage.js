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
  const setLocalStorage = item => {
    try{
      window.localStorage.setItem(key, JSON.stringify(item))
      setValue(item)
    }catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
