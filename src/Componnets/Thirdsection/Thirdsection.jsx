import React from 'react'
import "./Thirdsection.scoped.css"
import { animate, color, delay, transform } from 'framer-motion'
import { useEffect , useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoCart } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaCodeCompare } from "react-icons/fa6";
import {  useSelector , useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/CartSlice';



import { FaShoppingBag } from "react-icons/fa";

import { FaTrash } from "react-icons/fa6";

    import { useRef } from 'react'
    import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Link } from 'react-router-dom';

export default function Thirdsection() {
  // const notify = ()=>
      
    
   
   
  const clickOnButton = (item)=>{
    toast.success('succsessfuly added', {
      position: "top-right",
      autoClose: 1000,
      
      })
  
    addToPP(item);

  }

  const addToPP =(item)=>{
    dispatch(addProduct({...item , count:1} )) ;
  }
  
  const dispatch = useDispatch();

  const [loved , setLoved ] = useState(false);


  const [moseMove , setMouse] = useState(false);
  const mosueEnter=()=>{
    setMouse(true)
    // console.log(id)


  }

  const cart = useSelector(store => store.cart)

  const moseRmove =()=>{
    setMouse(false)


  }
  const [state , setState ] = useState("");
const chosen = useRef();
    const [data , setData] = useState([]);
    const getData =async ()=>{
        const res = await axios.get('Home.json')
        // console.log(res?.data)
        setData(res?.data)
    }
    const chooo =()=>{
        chosen.current.focus({preventScroll: true})
    }
    useEffect(()=>{
getData();
chooo();
    } ,[])

    console.log(cart)
  return (
    <div className='thrdSection'>
      <div className="text-up" >
<h2 className='h2TextUp'>Our Products</h2>
<p className='pTextUp'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
      </div>
      <div className="container-lg">
      <div className='secPart'>
        <ul className="upOfSelect">
           <li className='fisrt'> <button className='changed' ref={chosen} onClick={()=> setState("newArrival")}>New Arrival</button></li>
       <li className='second'>   <button className='no' onClick={()=> setState("Featured")}>Featured</button></li> 
           <li className='third'> <button className='no' onClick={()=> setState("onSale")} >On Sale</button></li>
           <li className='fouth'><button className='no' onClick={()=> setState("Trending")}>Trending</button></li> 

        </ul>

      </div>
      <div className="part2 py-5"> 
        
        <div className="row">
        {state === "" || state == "newArrival" || state == "onSale"?   (
          data.map(item=>{
            return(
              <div  className='col-lg-3 mb-5 col-sm-6 col-12 col-md-4   'key={item.id}  >
              
                <motion.div 
 className="product  "  >
  <Link to={`product/${item.id}`}>
  <div className="image">
      <motion.img src={item.image} alt="" className=' imagee ' width={'100%'}  />
  <img src={item.alterImg} className='whenHoverd w-100 h-100' alt="" width={'100%'} />
  
  </div>
  </Link>

                 <div className='loveAndDiscount d-flex flex-column  '> 
                 {item.discountPre? (
                  <div className='d-flex justify-content-between w-100 align-items-center '>
                  <p  className="mt-3 ms-3 "style={{backgroundColor:"red " , width:"50px" , fontSize:"14px" , fontWeight:"600" , color:"white"}}>{item.discountPre} </p>
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
               
                 <button className='  w-100 position-absolute buttonADD d-flex justify-content-center align-items-center'   onClick={ ()=>{ clickOnButton(item) } }><IoCart className='me-2' size='20px'   />Add to product</button>
                
               
        </motion.div>
        <div className="text mt-1 ">
                   <p className=' para m-0 '>{item.title.slice(0,32)}</p>
                 <span className='mt-0 dashed'>{item.discount ? item.discount+' $ ' : ""} </span ><span className='ms-2 actualyPrice'> {item.price + '$'} </span>
                 </div>
          
              </div>
              
            )
          })
        ) : (
          <div className='py-5'> 
<FaShoppingBag size="90px"  className='bag'/>
<p className='underBag mt-3'>There are no products!</p>
            </div>
        ) }
 </div>

      </div></div>    
      <ToastContainer  />

      </div>
      
   
  )
}
