import React, { useState } from 'react'
import './SmallCart.scoped.css'
import { HiShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { decreaseProduct, deleteProduct, increaseProduct } from '../../Redux/CartSlice';
import { BsTypeH1 } from 'react-icons/bs';
import { Link } from 'react-router-dom';



export default function SmallCart({openORclose}) {
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch()
    
const [isOpne , setIsOpen] = useState(false);
console.log(cart)
const allPrice = cart.reduce((acc , curren)=>{
    return acc + (curren.price * curren.count)
} , 0 )
console.log(allPrice)
  return (
    <>
{cart.length > 0 ? <div>

    <div  > 
        <div   data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" aria-controls="offcanvasRight" onClick={()=> setIsOpen(current => !current)} className="smallCart" >
      <HiShoppingBag  size={'30px'} style={{color:"rgb(255, 112, 4)"}} />
      <p>{cart.length} item</p>
      <span className='boxTotal'>${allPrice} </span>
        </div>   
<div data-bs-scroll="true"   className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Cart</h5>
    <button type="button" className="btn-close text-reset"  data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=> setIsOpen(prev => !prev)}></button>
 
 <hr /> 
 </div>
  <div className="offcanvas-body" >
    <div className="row">
    
        {
            cart.map((item)=>{
                return(

<div className="col-lg-12 d-flex  align-content-between  bbordered">

<div className="row">
    <div className="col-lg-5">
        <img src={item.image} width={'100%'} alt="" />
    </div>
    <div className="col-lg-7 ">
        <p>{item.title.slice(0,20)}</p>
        <p>{item.count}x ${item.price}.0</p>
        <span  className='d-flex justify-content-between  align-items-center  plusAndMinus'><FaPlus className='ll' onClick={()=>dispatch(increaseProduct(item)) } /> {item.count} <FaMinus className='ll'  onClick={()=> dispatch(decreaseProduct(item))}/>        </span>
    </div>
    

</div >
<IoClose className='close' size={'20px'}  style={{cursor:"pointer"}} onClick={()=> dispatch(deleteProduct(item))}/>
</div>

                )
            })
        }
    </div>
    <Link style={{textDecoration:"none"} } to={'/cart'}>
  <button className='  w-100 mt-5 buttonLast d-flex justify-content-between'> view cart <span className='contCount'>${allPrice}.0</span></button>
  </Link>
  </div>
</div>





    </div> 

</div> : ""}
 
     
    </>
  )
}
