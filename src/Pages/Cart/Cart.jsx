import React from 'react'
import { useState  } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import TopItem from '../../Componnets/TopItem/TopItem'
import './Cart.scoped.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { decreaseProduct, deleteProduct, increaseProduct } from '../../Redux/CartSlice'
import { IoClose } from 'react-icons/io5'

export default function Cart() {
    const title = "CART"
    const path = "HOME / CART"
    const cart = useSelector(store => store.cart)
    const allPrice = cart.reduce((acc , curren)=>{
        return acc + (curren.price * curren.count)
    } , 0 )
    const dispatch = useDispatch()
  return (
    <>
     <TopItem title ={title} path = {path} />
     <div className='py-5'></div>

<div className='parentOfTable d-flex align-items-center  flex-column'>
        <table className='table text-center'>
            <thead  className='table-light'>
<th>image</th>
<th>product name</th>
<th>until price</th>
<th>quantity</th>
<th>subtotal</th>
<th>action</th>
            </thead>

{cart.map((item)=>{
    return(
        <tbody>
            <tr>
                <td><img src={item.image} width={'100px'} height={'100%'} alt="" /></td>
                <td>{item.title.slice(0,15)}</td>
                <td>${item.price}.0</td>
                <td>        <span className=''><FaPlus className='ll' onClick={()=>dispatch(increaseProduct(item)) } /> {item.count} <FaMinus className='ll'  onClick={()=> dispatch(decreaseProduct(item))}/>        </span></td>
                <td>${ item.count * item.price}.0</td>
                <td><IoClose size={'30px'} onClick={()=> dispatch(deleteProduct(item))} style={{cursor:"pointer"}}/></td>
            </tr>
        </tbody>
    )
})}
<tbody>
   <tr>
    <td colSpan={4}></td>
    <td >TOTAL COAST</td>
    <td>${allPrice}.0</td>
   </tr>
</tbody>

        </table>
        
        <button className=' w-50 laastBTN'>PROCEED TO CHECKOUT </button>
       
        
        </div>
        <div className='py-5 mt-5'></div>
    </>
  )
}
