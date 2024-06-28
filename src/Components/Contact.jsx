import React, {  useState } from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {
  
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [message,setMessage]=useState('')
const sendEmail=(e)=>{
e.preventDefault();
const temp_params={
  from_name:name,
  from_email:email,
  message:message
}
emailjs.send('service_2zyhus5','template_p7g6l8l',temp_params,'zxwm4x1ESvadjhBRB').then((response)=>{
  console.log(response)
  setName('')
  setEmail('')
  setMessage('')
  alert("Successfully message sent")
})
.catch((error)=>{console.log(error)})
}
  return (
    <div id='contact' className='flex flex-col place-items-center justify-center mt-5  h-fit scroll-mt-12 text-white'>
      <h1 className='  font-semibold'>Contact Me </h1>
      <div className='mb-10'>Lorem ipsum dolor sit amet consectetur.</div>
      <div className='flex flex-col  w-1/2 place-items-center'>

   
      <form  onSubmit={sendEmail} className=' contents' >
        {/* <fieldset className=' border border-blue-950  m-4' > */}
          {/* <legend className=' text-3xl font-semibold'>Contact Me </legend> */}
          <div className=' w-full flex flex-col mx-20 '>
            <label htmlFor="name ">Name:</label>
            <input className='w-full my-2 h-8 outline-blue-200 outline-offset-0  border-transparent rounded-xl p-1 text-black' type="text" name="name" id="name" placeholder='Enter your name here...' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className=' w-full flex flex-col justify-center mx-20'>
            <label htmlFor="email">Email:</label>
            <input className='w-full my-2 h-8 outline-blue-200 outline-offset-0  border-transparent rounded-xl p-1 text-black' type="email" name="email" id="email" placeholder='Enter your email here...' onChange={(e)=>setEmail(e.target.value)}/></div>
          <div className=' w-full flex flex-col justify-center mx-20'>
            <label htmlFor="message">Message:</label>
            <textarea className='w-full my-2 h-28 resize-none outline-blue-200 outline-offset-0  border-transparent rounded-xl p-1 text-black' name="message" id="message" placeholder='Enter your message...' onChange={(e)=>setMessage(e.target.value)}></textarea>
            <div className="w-full flex justify-center my-6">
              <button className='w-2/3 bg-green-600  focus:bg-slate-500 rounded-3xl' type="submit">Send Message</button>
            </div>
          </div>
        {/* </fieldset> */}
      </form>
      </div>
    </div>
  )
}
