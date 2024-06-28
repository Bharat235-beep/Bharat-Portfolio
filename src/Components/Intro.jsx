import React, { useState } from 'react'
import { ReactTyped } from 'react-typed'

export default function Intro() {
    const [field,setField]=useState(false)
  return (
    <div name='home' id='home' className='intro mt-12 w-screen   scroll-mt-12 mb-40 '>
    <div className="  sm:w-auto text-6xl font-semibold   text-yellow-300  ">
  
      <div id='home-title' className=' text-blue-200 mt-28 '>Hi,I am Bharat Kumar</div>
    <ReactTyped strings={["<span id='home-title-typed'> and I am a passionate <br>Web developer</span>"]} typeSpeed={100} />
   
    <br />
    </div>
    {/* <div className="right bg-red-200 w-1/2">
        <img className=' w-96' src="src\assets\Daco_6122373.png" alt="Not available" />
        </div> */}
    </div>
  )
}
