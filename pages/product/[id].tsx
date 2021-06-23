import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://nextjs-vercel-kappa-lyart.vercel.app/api/avo'
  )
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    //incremental satatic generation
    //404 for everything else
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const id = params?.id as string
  const response = await fetch(
    `https://nextjs-vercel-kappa-lyart.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
