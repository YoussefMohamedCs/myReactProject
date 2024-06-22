import React from 'react'
import "./Navlist.scoped.css"
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Navlist() {
  return (
    <div className='navList'>

        <div className="owmconatiner">
            <ul className='PraentLis'>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="HomeFurniture">Home Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListHome'>
                        <li><Link to="/HomeFurniture/bedroom">Bedroom</Link></li>
                        <hr />
                        <li><Link to="/HomeFurniture/dining">Dining</Link></li>
                        <hr />
                        <li><Link to="/HomeFurniture/living">Living</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="Office">Office Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListOffice'>
                    <li><a href="/Office/launge">Lounge</a></li>
                    <hr />
                        <li><a href="/Office/chair">Office Chair</a></li>
                        <hr />
                        <li><Link to="/Office/table">Office Table</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="Hospital">Hospital Furniture <IoMdArrowDropdown /></Link>
                    <ul className='dropList drpListHospital'>
                        <li><Link to="/Hospital/bed">Hospital Bed</Link></li>
                        <hr />
                        <li><Link to="/Hospital/utility">Hospital Utility</Link></li>
                    
                    </ul>

                </li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </div>
  
    </div>
  )
}
