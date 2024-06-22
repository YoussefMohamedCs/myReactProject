import React from 'react'
import './About.scoped.css'
export default function AboutComponents() {
  return (
    <>
    <section className='sectionOne '>
        <h1 className='mb-2 '>ABOUT US</h1>
        <p>HOME / ABOUT</p>

    </section>

    <section className='sectionTwo'>
        <div className=' d-flex justify-content-center'>
            <div className='w-75'>
                  <h2 >Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.
        </h2> 
            </div>
         
        </div>

        <div className='imageContainer'>
            <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F02.jpg&w=1080&q=75" />
            <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F01.jpg&w=1080&q=75"  />

        </div>
    <div className="container-lg mt-5">
        <div className="row">
            <div className="col-lg-6">
                <h3 className='mb-4'>OUR STORES</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="col-lg-6">
                <h3 className='mb-4'>OUR MISSION</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
    </section>
   
    </>
  )
}
