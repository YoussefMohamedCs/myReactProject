import React from 'react'
import './Bedroom.scoped.css'
import TopItem from '../../Componnets/TopItem/TopItem'
import Item from '../../Componnets/Item/Item';
export default function Bedroom() {
    const title = "BEDROOM" ;
    const path = "HOME / COLLECTION / BEDROOM"
    const image = "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2Fleatherdoublebed.png%3Fv%3D1709182567&w=384&q=75"
    const title2 = "Quality House Storage Grey Le"
    const price1 = "$970.0"
    const prediscount = "17%"
    const discount = "1175.0"
    const price = "970.0"

    const image2="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709182384&w=384&q=75"


  return (
    <>
       <TopItem title={title} path={path} />
       <div className='py-5'></div>
      <section className='sectionOfItems py-5'>
        <div className="container-lg">
            <div className="row">
                <Item title={title2} discount={discount} price={price}  discountPre={prediscount}  image={image}/>
                <Item title={title2} discount={discount} price={price}  discountPre={prediscount}  image={image2}/>

            </div>
        </div>

      </section>
    </>
  )
}
