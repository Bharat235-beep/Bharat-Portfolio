import React from 'react'

const About = () => {
  return (
    <div id='about' className=' flex flex-col place-items-center text-white mb-14'>
      <h1>About Me</h1>
      <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
      <ul className=' text-xl mt-10'>
        <li className='mb-4 flex flex-row flex-nowrap'><div className='  mr-24 font-bold text-yellow-400'>Name:</div><div className=' ml-10'>Bharat Kumar</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-20 font-bold text-yellow-400'>Date of birth:</div><div className=' '>24 Decemeber 2003</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-20 font-bold text-yellow-400'>Address:</div><div className=' ml-10'>#220 , Sector-45 ,Chandigarh</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-28 font-bold text-yellow-400'>Email:</div><div className=' ml-10'>Rajkumar45burail@gmail.com</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-24 font-bold text-yellow-400'>Phone:</div><div className=' ml-10'>+91 6280876938</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-24 font-bold text-yellow-400'>Degree:</div><div className=' text-wrap ml-10'>Bachelor of Computer Applicaion</div></li>
        <li className='mb-4 flex flex-row flex-nowrap'>
          <div className="mr-24 font-bold text-yellow-400">Institution:</div>
          <div className=" text-wrap">Sri Guru Gobind Singh College,Sector 26,CHD,Affiliated to Panjab University</div>
        </li>
        <li className='mb-4 flex flex-row flex-nowrap'><div className=' mr-24 font-bold text-yellow-400'>Percentage%:</div><div className=' '>76.4%</div></li>
      
      </ul>

      <a  href='.. /assets/Daco_6122373.png' download={'hello.png'}><button type="button" className='text-yellow-300 bg-blue-800 rounded-lg hover:bg-slate-700'> Download CV</button></a>
    </div>
  )
}

export default About
