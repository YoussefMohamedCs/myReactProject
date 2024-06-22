import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'
import Item from '../Componnets/Item/Item'

export default function Living() {
    const title ="LIVING"
    const path = "HOME / COLLECTION / LIVING"
    const image1 = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F11_ea1e6c40-78cf-4d40-89c8-1e85a5af23d1.jpg%3Fv%3D1709109099&w=384&q=75"
    const title1 ="Product dummy title"
    const price1 ="39.0"



    const image2 ="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75"
    const discount2 ="1520.0"
    const title2 ="Living room sets"
    const price2 ="1540.0"
  return (
    <>
    <TopItem title = {title } path = {path} />
    <div className='py-5'></div>
    <div className="container-lg py-5">
        <div className="row">
            <Item image = {image1} title={title1} price = {price1}/>
            <Item image = {image2} title={title2} price = {price2} discount ={discount2}/>
        </div>
    </div>
    </>
  )
}
