import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <div className=' m-8 sm:m-3'>

      <Card className="bg-dark hover:scale-105 hover:transition-transform duration-700 text-white  shadow-xl hover:shadow-white">
        <Card.Img className=' w-60 h-60' src={props.image} alt="Card image" />
        {/* <Card.Img className=' opacity-50' src="src/assets/Daco_6122373.png" alt="Card image" /> */}
        <Card.ImgOverlay className=' backdrop-brightness-75  backdrop-contrast-125 flex flex-col place-items-center'>
          <Card.Title ><span className=' font-bold text-red-500 '>{props.title}</span></Card.Title>
          <Card.Text  className='text-justify font-semibold'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Button href={props.source} target='_blank' variant="primary">See more</Button>

        </Card.ImgOverlay>
      </Card>
    </div>

  )
}

export default ProjectCard
