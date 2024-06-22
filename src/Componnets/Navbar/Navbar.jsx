import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import "./Navbar.scoped.css"
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { IoPersonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { color } from 'framer-motion';
import { IoMdArrowDropdown } from 'react-icons/io';
export default function Navbar() {
    const cart =useSelector(store => store.cart)
    
  return (
<>
    <div className='nav py-4 '>
        <div className="container-lg">
            <div className="row justify-content-between">
                <div className="col-lg-3 colMaybeHidden col-md-3 col-3 col-sm-3">
                    <div className="toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <GiHamburgerMenu size={'30px'} />
                    </div>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">                <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" /></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul className='PraentLis'>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to={'HomeFurniture'}>Home Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListHome'>
                        <li><Link to="/HomeFurniture/bedroom">Bedroom</Link></li>
                  
                        <li><Link to="/HomeFurniture/dining">Dining</Link></li>
                    
                        <li><Link to="/HomeFurniture/living">Living</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="Office">Office Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListOffice'>
                    <li><a href="/Office/launge">Lounge</a></li>
                        <li><a href="/Office/chair">Office Chair</a></li>
                 
                        <li><Link to="/Office/table">Office Table</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="Hospital">Hospital Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListHospital'>
                        <li><Link to="/Hospital/bed">Hospital Bed</Link></li>

                        <li><Link to="/Hospital/utility">Hospital Utility</Link></li>
                    
                    </ul>

                </li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
  </div>
</div>
                </div>
            <div className="col-lg-3 col-md-3 col-3 col-sm-3 imageMaybrHidden">
                <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" />
            </div>
            <div className="col-lg-3 col-md-5 col-6 col-sm-5 d-flex align-items-center justify-content-end">
                <div className="icons d-flex justify-content-between w-75">
                    <div className="icon-one">
                        <IoSearchOutline  size={`25px`}/>
                    </div>
                    <div className="icon-two">
                    <IoPersonSharp size={`25px`} />
                    </div>
                    <div className="icon-three">
                        <Link to={'/cart'}>
                        <IoBagOutline size={`25px`} />
                        </Link>
                        <p className='countNav'>{cart.length}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
