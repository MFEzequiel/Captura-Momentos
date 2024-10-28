import { createContext, useState } from 'react'
import { $, cl } from '../hoocks/jquery'

export const SetState = createContext()

export function GetProduct ({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [filterText, setFilterText] = useState('')

  return (
    <SetState.Provider
      value={{
        products: products,
        setProducts: setProducts,
        filter: filterText,
        setFilter: setFilterText,
        loading: loading,
        setLoading: setLoading
      }}
    >
      {children}
    </SetState.Provider>
  )
}
