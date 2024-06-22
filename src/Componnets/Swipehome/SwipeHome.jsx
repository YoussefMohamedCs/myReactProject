import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "./SwipeHome.scoped.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {delay, motion} from"framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

const vraiant ={
    initial:{
            opacity:0 , 
            y:100 ,
    } ,
    animate:{
opacity:1 , 
y :0 ,
transition:{
    delay:0.3 ,
    duration:1 ,
}
    }
}

export default function SwipeHome() {
    const images =[{
        "titleP " :  "New Products" ,
        "titleH1" : "Flexible Chair" ,
        "titlep2" : "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna" ,
        "image" : "https://furns-react.netlify.app/images/slider-image/slider-1.png" , 
        "backGroundcOLOR" :  "rgb(231, 231, 231)"   
     } , 
    {
        "titleP " :  "Best Seller" ,
        "titleH1" : "Creative Sofa" ,
        "titlep2" : "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna" ,
        "image" : "https://furns-react.netlify.app/images/slider-image/slider-2.png" ,
        "backGroundcOLOR" :  "rgb(231, 231, 231)"  

      
    }]
    useEffect(()=>{
        AOS.init({duration:2000})
    } ,[])
    const [chosen , setChosen] = useState(true);
    const changeCHoosen =()=>{
        setChosen((prev) => !prev )
        console.log(chosen)
    }
  return (

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {images.map((item)=>{
            return(
                <SwiperSlide key={item.id}>
                    <div className="parent d-flex align-items-center align-items-md-center align-items-sm-center" style={{height:"85vh" , backgroundColor:`${item.backGroundcOLOR}` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6  col-6 d-flex align-items-center pparent">
                                <div className="text-backage d-flex flex-column jsutify-contnet-end">
                                    <motion.p className='firstP' variants={vraiant} initial="initial" whileInView="animate">{item['titleP ']}</motion.p> 
                                    <motion.h1 className='firstH1' variants={vraiant} initial="initial" whileInView="animate">{item.titleH1}</motion.h1> 
                                    <motion.p className='secondP' variants={vraiant} initial="initial" whileInView="animate">{item.titlep2}</motion.p>  
                                    <motion.button  variants={vraiant} initial="initial" whileInView="animate" className=' w-25 buttonHome'>Shop now</motion.button>

                                </div>
                            </div>
                            <div className="col-lg-6 col-6 d-flex justify-content-end">
                                <motion.img variants={vraiant} initial="initial" whileInView="animate" src={item.image} alt="" width={'100%'}  />
                            </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            )
        })}

      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide> */}
    </Swiper>
  )
}
