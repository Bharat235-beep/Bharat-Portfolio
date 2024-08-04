import { useInView,motion } from 'framer-motion';
import React, { useRef } from 'react'

const About = () => {
  const ref=useRef(null);
  const isInView=useInView(ref,{margin:'0px',once:true})
  return (
    <motion.div id='about' className=' flex flex-col place-items-center text-white mb-14'
    ref={ref} initial={{opacity:0,x:-200}}
    animate={isInView?{opacity:1,x:0}:{opacity:0,x:-200}}
    transition={{duration:1.5}}
    >
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

      <a  href='src/assets/Resume.jpeg' download="Res.jpg"><button type="button" className='text-yellow-300 bg-blue-800 rounded-lg hover:bg-slate-700'> Download Resume</button></a>
    </motion.div>
  )
}

export default About
