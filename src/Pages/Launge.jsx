import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Launge() {
    const title = "LOUNGE"
    const path = "HOME / COLLECTION / LOUNGE"
    // ----------------------------------
    const image1 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fofficeloungesofasetblack.jpg%3Fv%3D1709182913&w=384&q=75"
    const discountPre1 = "-32%"
    const discount1 = "675.0"
    const title1 = "Office Lounge Sofa Set Black"
    const price1 = "459.0"
    // ------------------------------------------
    const image2 ="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fofficeloungeset.jpg%3Fv%3D1709181787&w=384&q=75"
    const discountPre2 ="-14%"
    const discount2 = "2100.0"
    const title2 ='Modern Lounge Sofas'
    const price2 = "1800.0"
  return (
    <>
    <TopItem  title = {title} path = {path}/>
    <div className='py-5'></div>
    <div className="container-lg py-5">
        <div className="row">
            <Item image={image1} discountPre={discountPre1} discount={discount1} title={title1} price={price1} />

            <Item image={image2} discountPre={discountPre2} discount={discount2} title={title2} price={price2} />
        </div>
    </div>
    
    </>
  )
}
