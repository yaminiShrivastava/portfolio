import React from 'react'
import ProjectCard from './ProjectCard'
import Roker from '../image/roker.jpg'
import fshare from '../image/fileShare.jpg'
import news from '../image/News.jpg'
import wordle from '../image/wordle.jpg'

function Project() {
  return (
    <>
    <div className='Heading' id='project'>Project</div>
    <div className='Projects'>

    <ProjectCard img={Roker} github='https://github.com/yaminiShrivastava/ParkingLot' heading='Parking website clone'/>
    <ProjectCard img={fshare} github='https://github.com/yaminiShrivastava/fileSharing' heading='file sharing'/>
    <ProjectCard img={wordle} github='https://github.com/yaminiShrivastava/wordle' heading='wordle game'/>
    <ProjectCard img={news} github='https://github.com/yaminiShrivastava/NewsApp' heading='news website clone'/>
    </div>
    </>
  )
}

export default Project
