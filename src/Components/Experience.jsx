import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    
    <div id='experience' className=' w-screen scroll-mt-12 mb-40 text-white'>
      <h1 className=' text-center text-white'>Education and Experience</h1>
      <div className='text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptatibus.</div>
      <VerticalTimeline>
      <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2021 - 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h2 className="vertical-timeline-element-title">Bachelor of Computer Application</h2>
    <h4 className="vertical-timeline-element-subtitle"> </h4>
    <p className='text-black'>
    Sri Guru Gobind Singh College ,Sector 26,Chandigarh
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h2 className="vertical-timeline-element-title">Lorem ipsum dolor sit.</h2>
    <h4 className="vertical-timeline-element-subtitle text-black"></h4>
    <p className='text-black'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, veritatis.
    </p>
  </VerticalTimelineElement>

 
</VerticalTimeline>
    </div>
    
  )
}

export default Experience
