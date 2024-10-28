import { SetState } from '../Context/productContext'
import { cl } from './jquery'
import { useContext, useEffect, useState } from 'react'

export function useProduct () {
  const [products, setProducts] = useState([])
  const { product } = productJson
  const { setLoading } = useContext(SetState)

  useEffect(() => {
    const render = async () => {
      setLoading(true)
      await fechingProduct().then(newProduct => setProducts(newProduct))
      setLoading(false)
    }
    render()
  }, [])

  const selectedProducts = products ? products : product

  const mappedProduct = selectedProducts?.map(product => ({
    id: product.Id,
    title: product.Title,
    description: product.Description,
    poster: product.Poster,
    price: product.Price
  }))

  return { product: mappedProduct }
}
