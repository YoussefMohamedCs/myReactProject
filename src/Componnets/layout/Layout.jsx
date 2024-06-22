import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Navlist from '../Navlist/Navlist'
import SmallCart from '../SmallCartCOmponent/SmallCart'
export default function Layout() {


   return (
    <>
    <Navbar  />
    <Navlist />
<Outlet></Outlet>
<Footer />


  <SmallCart />
      

    </>
  )
}
