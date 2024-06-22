import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Chair() {
    const title = "OFFICE CHAIR"
    const path = "HOME / COLLECTION / OFFICE CHAIR"
    //----------------------------------------------
    const image1 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fofficechari.jpg%3Fv%3D1709181544&w=384&q=75"
    const discountPre1 = "-27%"
    const discount1 = "449.0"
    const title1 = "Guessky Office Chair"
    const price1 = "329.0"
    //-----------------------------------------------
    const image2 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Foffice-chair-2.png%3Fv%3D1709181470&w=384&q=75"
    const discountPre2 = "-41%"
    const discount2 = '299.0'
    const title2 = "Fabric and Plastic Regular Exec"
    const price2 = "175.0"
  return (
    <>
    <TopItem title = {title} path = {path}/>
    <div className='py-5'></div>
    <div className="container-lg py-5">
        <div className="row">
            <Item image = {image1} discountPre={discountPre1} discount={discount1}  title={title1} price = {price1}/>
            <Item image={image2} discountPre={discountPre2} discount={discount2} title={title2} price={price2} />
        </div>
    </div>
     
    </>
  )
}
