import React from 'react'
import { motion, transform } from 'framer-motion'
import './Item.scoped.css'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { FaCodeCompare, FaRotate } from 'react-icons/fa6'
export default function Item({image , discountPre , discount  , title , price  }) {
  return (
    <>
             <div className="col-lg-3 mb-5   "   >
                <motion.div 
 className="product  " whileHover={{rotate:"2deg"}}  >
  <div className="image">
      <motion.img src={image} alt="" className=' imagee '   width={'100%'}  />
  </div>

                 <div className='loveAndDiscount d-flex flex-column  '> 
                 {discountPre? (
                  <div className='d-flex justify-content-between w-100 align-items-center text-center '>
                  <p  className="mt-3 ms-3 "style={{backgroundColor:"red " , width:"50px" , fontSize:"14px" , fontWeight:"600" , color:"white"}}>{discountPre} </p>
                  <div className='d-flex flex-column position-absolute   mt-2 top-0 w-100 align-items-end justify-content-end'>
                    <FaRegHeart className='me-3  heart ' size={"40px"} />
                  <BsArrowsFullscreen className='me-3 heart mt-2  heart-two' size={"40px"} />
                  <FaCodeCompare className='me-3 heart mt-2  heart-two' size={"40px"} />
                  </div>
                  
                  
                  </div>
                 ) : (
                  <motion.div className='w-auto d-flex justify-content-end align-items-center mt-3'  > <div className='d-flex flex-column  position-absolute top-50 '> <FaRegHeart className='me-3 heart   ' size={"40px"}   /> <BsArrowsFullscreen className='me-3 heart mt-2  heart-two ' size={"40px"} />  <FaCodeCompare className='me-3 heart  mt-2  heart-two' size={"40px"} /></div>  </motion.div> 
                 
                 )}
             

                 </div>
               
                 <button className='  w-100 position-absolute buttonADD d-flex justify-content-center align-items-center'><IoCart className='me-2' size='20px' />Add to product</button>
               
        </motion.div>
        <div className="text mt-0 text-center ">
                   <p className=' para m-0 text-center  '>{title.slice(0,32)}</p>
                 <span className='mt-0 dashed text-center'>{discount ? discount+' $ ' : ""} </span ><span className='ms-2 actualyPrice'> {price + '$'} </span>
                 </div>
              </div>
      
    </>
  )
}
