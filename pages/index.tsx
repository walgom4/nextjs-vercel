import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window.fetch('/api/avo').then(response => response.json()).then(({ data, length})=> {
      setProductList(data)
    })
    
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!...</div>
      {productList.map(producto => {
        return <div>{producto.image}</div>
      })}
    </div>
  )
}

export default HomePage
