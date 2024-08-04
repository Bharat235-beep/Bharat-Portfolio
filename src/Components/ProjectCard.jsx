import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion, useInView } from 'framer-motion';


function ProjectCard(props) {
  const ref=useRef(null);
  const isInView=useInView(ref,{margin:'0px',once:true})
  return (
    <motion.div className=' m-8 sm:m-3'
    ref={ref} initial={{opacity:0,scale:1}}
    animate={isInView?{opacity:1,scale:1}:{opacity:0,scale:0}}
    transition={{duration:1.2, scale: {
      type: "spring",
      damping: 10,
      stiffness: 50,
      restDelta: 0.001
    }}}
    >

      <Card className="bg-dark hover:scale-105 hover:transition-transform duration-700 text-white  shadow-xl hover:shadow-white">
        <Card.Img className=' w-60 h-60 opacity-50' src={props.image} alt="Card image" />
        {/* <Card.Img className=' opacity-50' src="src/assets/Daco_6122373.png" alt="Card image" /> */}
        <Card.ImgOverlay className=' backdrop-brightness-75  backdrop-contrast-125 flex flex-col place-items-center'>
          <Card.Title ><span className=' font-bold text-red-700 '>{props.title}</span></Card.Title>
          <Card.Text  className='text-center font-semibold text-purple-300 '>
           {props.description}
          </Card.Text>
          <Button href={props.source} target='_blank' variant="primary">Live Demo</Button>

        </Card.ImgOverlay>
      </Card>
    </motion.div>

  )
}

export default ProjectCard
