import React from 'react'
import { ProgressBar } from 'react-bootstrap'
const SkillProgress = (props) => {
  return (
    <div className=' w-96 m-5'>
        <div className="skill font-semibold text-yellow-300">
            {props.skill}
        </div>
      <ProgressBar animated variant='primary'  now={props.now} label={props.now} />
    </div>
  )
}

export default SkillProgress
