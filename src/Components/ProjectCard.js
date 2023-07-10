import React from 'react'

function ProjectCard(props) {
  return (
    <>
    <div className='ParticularCard light' data-aos="zoom-in" >
        <img className='ParticularCardImg' src={props.img} alt='project'/>
        <div className='PArticularCardBody'>
            <div className='ParticularCardHeading'>{props.heading}</div>
            <div className='ParticularCardContent flex'>

            <a className='' href={props.github}><i class="fa-brands fa-github projectIcon"></i></a>
            <a className='' href={props.link}> <i class="fa-solid fa-arrow-up-right-from-square projectIcon"></i></a>
            </div>
        </div>
    </div>

    </>
  )
}

export default ProjectCard
