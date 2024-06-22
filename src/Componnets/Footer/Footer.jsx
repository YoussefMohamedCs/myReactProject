import React from 'react'
import "./Footer.scoped.css"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

import { FaInstagram } from "react-icons/fa";



import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
<div className="container-lg justify-content-center">
  <div className="row align-items-center justify-content-center">
    <div className="col-lg-3 col-12 col-md-6 abs d-flex flex-column align-items-center ffooter justify-content-center">
      <ul>
        <h6 className='headerOfFooter'>about us </h6>
        <li>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</li>
        <li className='social-media'><span><FaFacebook size={'20px'} width={'100%'} height={'100%'}/></span>
<span><FaTwitter /></span>
<span><FaLinkedin size={'20px'} width={'100%'} height={'100%'} /></span>
<span><FaYoutube size={'20px'} width={'100%'} height={'100%'} /></span>
<span><FaInstagram  size={'20px'} width={'100%'} height={'100%'}/></span></li>

      </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center ffooter">
      <ul >
      <h6 className='headerOfFooter'> information </h6>
      <li className='linkPartTwo'> <a href=""> About us</a></li>
      <li className='linkPartTwo'> <a href=""> manufactors</a></li>
      <li className='linkPartTwo'> <a href="">  tracking order</a></li>
      <li className='linkPartTwo'> <a href="">privacy&policy</a></li>
      <li className='linkPartTwo'> <a href="">teams&conditions</a></li>
        
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center ffooter">
      <ul>
      <h6 className='headerOfFooter'> My account </h6>
      <li className='linkPartTwo'> <a href=""> login</a></li>
      <li className='linkPartTwo'> <a href=""> my cart</a></li>
      <li className='linkPartTwo'> <a href="">  wishlist</a></li>
      <li className='linkPartTwo'> <a href="">comapare</a></li>
      <li className='linkPartTwo'> <a href="">my account</a></li>
        
      </ul>
    </div>
    <div className='col-lg-3 d-flex col-md-6  col-12 flex-column align-items-center ffooter '>
      <ul>
        <h6 className='headerOfFooter'>NEWSLETTER</h6>
        <li><input type="text" placeholder='Enter E-mail Address' className='footerInputField'  />
        </li>
        <li><button className='btn mt-3 buttonOfSub'><LuSend  size={'20px'}/>  Subscribe</button></li>
      </ul>

    </div>
  </div>
</div>
    </div>
  )
}
