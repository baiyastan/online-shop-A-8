import React from 'react'
import "./Product.css"

import mainImage from "../../assets/image/01.png"
import wishlist from "../../assets/svg/wishlist.svg"
import view from "../../assets/svg/view.svg"
import Star from '../../assets/svg/star'

function Product({data}) {
  return (
    <div className='product-item'>
      <div className='product-image'>
        <img src={data.image ? data.image : mainImage} alt="" className='main-image' />
        <div className='discount'>-40%</div>
        <div className='icons'>
          <div className='icon'>
            <img src={wishlist} alt="icon" />
          </div>
          <div className='icon'>
            <img src={view} alt="icon" />
          </div>
        </div>
        <button className='product-btn'>Add To Cart</button>

      </div>
      <div className='product-detail'>
        <p className='product-title'>Title</p>
        <div className='prices'>
          <p className='discount-price'>1200$</p>
          <p className='price'>1459$</p>
        </div>
        <div className='starts'>
          {
          [1,2,3,4,5].map((star, index) => (
            <Star key={index} fill={star <= 3 ? "#FFAD33" : "gray"} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Product