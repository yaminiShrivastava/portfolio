import React from 'react'
import Img from '../image/developer.jpg'
function Home() {
  return (
    <>
    <div className='oBox' id='home'>

    <div className='intro'>
        <div className='frstHomeLine'>hlo world !!! My name is</div>
        <div className='scndHomeLine'> Yamini Shrivastava</div>
        <div className='thrdHomeLine'>I love to explore & Code</div>
        <div className='frthHomeLine'>An aspiring software engineer with the ability to grow as an individual and learn in the surrounding of talented people. </div>
        <a href = "mailto: yamini8383@gmail.com"><button className='contactBtn'>Contact Me</button></a>


    </div>
    <img  className='developer' src={Img} alt='developer'/>
    </div>
    </>
  )
}

export default Home
