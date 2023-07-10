import React from 'react'

function SkillCard(p) {
  return (
    <div className='skillCard'>
        <div className='skillImg'>
            <img className='sImg' src={p.img} alt=''/>
            <div className='skillName'>{p.sName}</div> 

        </div>

    </div>
  )
}

export default SkillCard
