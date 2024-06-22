import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Table() {
    const title = "OFFICE TABLE"
    const path ="HOME / COLLECTION / OFFICE TABLE"
    //---------------------------------------------
    const image1 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fofficetable.png%3Fv%3D1709181290&w=384&q=75"
    const discountPre = "-21%"
    const discount = "410.0"
    const title1 = "Office Table"
    const price1 = "325.0"
  return (
    <>
    <TopItem  title  = {title} path={path}/>
    <div className='py-5'></div>

  <div className="container-lg py-5">
    <div className="row">
        <Item image={image1} title={title1} discountPre={discountPre} discount={discount} price={price1}  />
    </div>

  </div>
      
    </>
  )
}
