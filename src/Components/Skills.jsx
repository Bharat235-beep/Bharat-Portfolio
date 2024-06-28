import React from 'react'
import SkillProgress from './SkillProgress';
const Skills = () => {

  return (
    <div id='skills' className=' h-fit  flex flex-row flex-wrap justify-around place-items-center scroll-mt-12 mb-40'>
        <div className="title text-stone-100 w-screen flex flex-col justify-center place-items-center">
            <h1>My Skills</h1>
            <div className="sub-title w-2/3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate soluta velit, minus sed aspernatur maiores aliquid incidunt
            </div>
        </div>
        <SkillProgress now={90} skill={'HTML'} />
        <SkillProgress now={80} skill={'CSS'}/>
        <SkillProgress now={80} skill={'Javascript'}/>
        <SkillProgress now={70} skill={'React js'}/>
        <SkillProgress now={70} skill={'Node js'}/>
        <SkillProgress now={70} skill={'MongoDb'}/>
        <SkillProgress now={60} skill={'Express js'}/>
    </div>
  )
}

export default Skills
