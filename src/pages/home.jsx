import React, { useState, useEffect } from 'react'

import Header from '../components/header'
import Product from '../components/product'

const API = 'https://shopping-cart-api.khriztianmoreno.now.sh/api/products'

const getProducts = async (setProducts) => {
    try {
        const results = await fetch(API)
        const products = await results.json()
        setProducts(products)
    } catch (error) {
        console.error('Could not fetch products ;(', error)
    }
}

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts(setProducts)
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    {products.map(product => <Product key={product._id} {...product} />)}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home
