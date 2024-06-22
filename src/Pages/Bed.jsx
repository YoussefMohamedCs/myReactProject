import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Bed() {
    const title = "HOSPITAL BED"
    const path = "HOME / COLLECTION / HOSPITAL BED"
    ///-------------------------------
    const image1 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fmbg-506-1.jpg%3Fv%3D1709180882&w=384&q=75"
    const discountPre1 = "-17%"
    const discount1 = "235.0"
const title1 ="General Hospital Bed"
const price1 = "195.0"
//-----------------------------------
const image2 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Ficubed.jpg%3Fv%3D1709180755&w=384&q=75"
const discountPre2 = "-10%"
const discount2 = "1050.0"
const title2 = "Mechanical ICU Bed"
const price2 = "945.0"
  return (
    <>
<TopItem  title = {title} path = {path}/>
<div className='py-5'> </div>
<div className="container-lg py-5">
    <div className="row">

        <Item image = {image1} discountPre={discountPre1} discount={discount1} title={title1} price={price1} />
        <Item image = {image2} discountPre={discountPre2} discount={discount2} title={title2} price = {price2} />
    </div>

</div>

    

    </>
  )
}
