import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Dining() {
    const title = "DINING"
    const path ="HOME / COLLECTIONS / DINING"
    const image1= "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fdiningsets.jpg%3Fv%3D1709182138&w=384&q=75"
    const discountPre1 = "-8%"
    const discount1 = "921.0"
    const title1 = "Dining Room sets"
    const price1 = "850.0"


    const image2 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fdiningsetsluxury.jpg%3Fv%3D1709182060&w=384&q=75"
const discountPre2= "-9%"
const discount2 ="8421.0"
const title2 ="Luxury Dining Room Set"
const price2="7651.0"
  return (
    <>
   <TopItem title={title} path={path} />
   <div className='py-5'></div>
   <div className="container-lg py-5">
    <div className="row">
        <Item title={title1} image={image1} discountPre={discountPre1} discount={discount1} price={price1} />
        <Item  title={title2} image={image2} discountPre={discountPre2} discount={discount2} price={price2}/>
    </div>
   </div>
    </>
  )
}
