import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()

  const [product, setProduct] = useState<TProduct>()
  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((reponse) => {
        setProduct(reponse)
      })
  }, [query.id])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      <div>Nombre: {product?.name}</div>
    </section>
  )
}

export default ProductPage
