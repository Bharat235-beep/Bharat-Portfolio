import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  const project=[
  {
    title:"WeatherWave",
    source:"https://bharat235-beep.github.io/WeatherWave/",
    image:"https://static.vecteezy.com/system/resources/thumbnails/033/352/730/small/sunny-sky-background-sunny-day-background-sun-wallpaper-sunny-sky-landscape-blue-sky-background-summer-sky-background-ai-generative-photo.jpg",
    description:"This web application can show us weather details of specified city like current weather and weather forecast .Developed using React.js."
  },
  {
    title:"Text2Voice",
    source:"https://bharat235-beep.github.io/Text2Voice/",
    image:"https://www.vidnoz.com/bimg/realistic-text-to-speech.webp",
    description:"This web application converts text to speech.Developed using HTML,CSS and JavaScript."
  },
  {
    title:"Voice2Text",
    source:"https://bharat235-beep.github.io/Voice2Text/",
    image:"https://tj-web-prod.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/Speech-to-text-apps_Feature.jpg",
    description:"This web application converts user's speech into text.Developed using React.js ."
  },
  {
    title:"Task Manager",
    source:"https://task-manager-gamma-liart.vercel.app/",
    image:"https://static.vecteezy.com/system/resources/thumbnails/000/963/090/small/cartoon-man-with-to-do-list-on-clipboard.jpg",
    description:"Created a task-management application using Next.js which is also consists of authentication system."
  },
  {
    title:"CRUD Application",
    source:"https://crud-user-frontend.vercel.app/",
    image:"https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/crud.png",
    description:"This web application performs basic CRUD(Create,Read,Update,Delete) operations and developed using MERN(MongoDb,Express.js,React.js,Node.js)."
  },
  {
    title:"TextUtils",
    source:"https://bharat235-beep.github.io/text-utils/",
    image:"https://onlinetexttools.com/images/legends/text/what-are-online-text-tools.png",
    description:"This web application performs some basic operations on text.Developed using React.js"
  },
  ,
  {
    title:"Calculator",
    source:"https://bharat235-beep.github.io/calculator/",
    image:"https://img.freepik.com/premium-vector/calculator-cartoon-character-dancing-with-cute-face-illustration-hand-drawing-vector_772546-1024.jpg",
    description:"This calculator can perform some basic operations and created using HTML,CSS and JavaScript."
  }
]
  return (
    <div id='projects' className=' flex flex-col  place-items-center scroll-mt-12'>  
<h1 className=' text-center text-white '>My Projects</h1>
<div className='text-white mb-10'>Lorem ipsum dolor sit amet consectetur.</div>
      <div className='flex flex-row justify-center items-center flex-wrap'>
      {
        project.map((project)=>{
         return <ProjectCard key={project.source} image={project.image} source={project.source} title={project.title} description={project.description} />
        })
      }
    </div>
    </div>

  )
}

export default Project
