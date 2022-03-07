import React from 'react'
import './products.css'



const ProductCard = ({product}) => {
  const { name, price, image} = product

  return (
    <div className="productCard">
      <div className="productImgWrapper">
        <img src={image} alt="" className="productImg" />
      </div>
      <div className="productCardDesc">
        <h4 className="productName">{name}</h4>
        <p className="productPrice">¥ {price}</p>
      </div>
      <div className="btnWrapper">
        <button className="addToCartBtn" >加入购物车</button>
      </div>
    </div>
  )
}

export default ProductCard