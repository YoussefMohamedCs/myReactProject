import React, { useEffect, useState  , useRef} from 'react'
import axios from 'axios'
import { useParams  } from 'react-router-dom'
import TopItem from '../Componnets/TopItem/TopItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './productDetails.scoped.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { FaCodeCompare } from "react-icons/fa6";
import { useSelector , useDispatch } from 'react-redux';



import { IoMdArrowDropdown } from "react-icons/io";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { addProduct, increaseProduct } from '../Redux/CartSlice';

export default function PeoductDetails() {
  
  function handlePlus(){
    setCount(prev => prev+1)
  }
  function handleMinus(){
    if(count > 1){
      setCount(prev => prev-1)
    }

  }
  const cart = useSelector(store => store.cart)

  
  const dispatch = useDispatch();
    // const [thumbsSwiper, setThumbsSwiper] = useState("");
const [count , setCount] = useState(1);
    const currentproductId = useParams()
 const index = currentproductId.productId-1;
 const productIndex= cart.findIndex((item)=> item.id == currentproductId.productId)
 console.log(productIndex)
 /////////////////////////////
    const [data , setData] = useState([]);
    const [title , setTitle ] = useState("");
    const getData =async ()=>{
        const res = await axios.get('../Home.json')
        setData(res?.data)
        setTitle(res?.data[index]?.title)
    }

    useEffect(()=>{
        getData();
    } , [])
    //////////////////////////////////////
    const path  = "HOME / PRODUCTS"
   

    const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
    <TopItem  title= {title} path={path}/>
    <div className="productDetails ">
        <div className="container-lg">
             <div className="row">
                <div className="col-lg-5">
                <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={data[index]?.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data[index]?.alterImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={data[index]?.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data[index]?.alterImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=128&q=75" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=128&q=75" />
        </SwiperSlide>
      </Swiper>
                </div>
                <div className="col-lg-7">
                    <div className="title-items">
                        <p className='SKU'>SKU:<span className='sku-num'> 1510</span></p>
                        <p className='SKU'>Availability:<span className='sku-num'> 10 in Stock</span></p>
                        <h2>{data[index]?.title.slice(0 , 28)}</h2>
                        <p className='discount'> <span className=''>{data[index]?.discount ? `$${data[index]?.discount}.0` : " "}</span> <span className='price'>${data[index]?.price}.0</span></p>
                        <p className='dicription'>{data[index]?.discription}</p>
                        <div className='d-flex justify-content-between w-25 mt-4 w-50 parentOfCountContraol'>
                 <div className='d-flex justify-content-between w-25 align-items-center countControal'>
                    <div className="iconOne d-flex align-items-center">
                                         <FaPlus onClick={handlePlus}  />
                    </div>

                        <p>{count}</p>
                        <div className="iconTwo d-flex align-items-center">
                        <FaMinus onClick={handleMinus}/> 
                    </div>

                 </div>

                        <button className='addProductButton w-50' onClick={()=> dispatch(addProduct({...data[index] , count:count}))}> add to cart</button>


                        </div>
                        <div className='beforeLast d-flex justify-content-between align-content-center mt-4 topIcons'>
                            <div className='d-flex justify-content-between align-items-center iconssONe'>
                            <CiHeart />
                            <p> add to wishlist</p>
                            </div>
                             <div className='d-flex justify-content-between align-items-center  iconssTwo'>
                             <FaCodeCompare />
                            <p> add to compare</p>
                             </div>

                        </div>

                 
              

                  
                        
                    </div>

                </div>
        </div>
        </div>
    </div>
   
      
    </>  
  )
}
