import React from 'react'
import TopItem from '../Componnets/TopItem/TopItem'

export default function Utility() {
    const title = "HOSPITAL UTILITY"
    const path = "HOME / COLLECTION / HOSPITAL UTILITY"
  return (
    <>
    <TopItem title={title} path={path}/>
    <div className='py-5'></div>
    <div className='text-center py-5'>
        <h1>no product found</h1>
    </div>
    <div className='py-5'></div>
      
    </>
  )
}
