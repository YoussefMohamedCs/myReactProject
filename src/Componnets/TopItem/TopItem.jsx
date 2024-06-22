import React from 'react'
import './TopItem.scoped.css'
export default function TopItem(props) {
  return (
    <div className='py-5 TopItem text-center'>
<h1>{props.title}</h1>
<p className='mt-3'>{props.path}</p>      
    </div>
  )
}
