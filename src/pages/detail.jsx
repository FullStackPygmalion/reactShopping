import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import Product from '../components/product'

const API = 'https://shopping-cart-api.khriztianmoreno.now.sh/api/products'

const getProducts = async (id, setProduct) => {
  try {
    const result = await fetch(API + '/' + id)
    const product = await result.json()
    setProduct(product)
  } catch (error) {
    console.error('Could not fetch products ;(', error)
  }
}


const Detail = (props) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProducts(props.match.params.id, setProduct)
  }
    , [props])

  return (
    <React.Fragment>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <Product {...product} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Detail
