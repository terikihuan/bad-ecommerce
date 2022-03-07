import React from 'react'
import './products.css'

// Components
import ProductCard from './ProductCard'

// Data
import products from '../../data/products.json'

const Products = () => {
  return (
    <div className="products">
      <div className="titleGroup">
        <div className="titleLine"></div>
        <h2 className="pageTitle">产品</h2>
        <div className="titleLine"></div>
      </div>
      <div className="productsGroup">
        <div className="productCardsContainer">
          {products.map((product) => <ProductCard product={product} key={product.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Products