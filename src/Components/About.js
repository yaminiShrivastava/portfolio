import React from 'react'
import portfolio from '../image/portfolio.jpg'
function About() {
  return (
    <div className='aboutPage' id='about'>
        <div className='Heading'>About</div>
        <div className='aboutContent'>
            <div className='aboutMe' data-aos="fade-up-right">
              <div>
              Hello! Interestingly, I have been a student of Maths in my high school and got introduced to programming in my freshman year at <span className='green'>Delhi Technological University</span>. My interest in coding started back in 2020 during first year of B.tech . Since then, I started learning programming languages & solving problems based on data structure and algorithms. Most importantly I'm a <span className='green'> Problem Solver</span>.<br/><br/>

              Today, I'm currently pursuing my Bachelors in <span className='green'>Mathematics and Computing</span> (2020-2024) with <span className='green'>8.59 GPA aggregate</span>.<br/><br/>

              Also I've knowledge of <span className='green'>Web Development </span>and created some projects on that using HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other cool libraries and frameworks. <br/><br/>
              Here is a list of the technologies that I've worked with.
              <div className='list'>
                <ul className='skillItems'>
                  <li className='skillS'>C || C++</li>
                  <li className='skillS'>Data Structures</li>
                  <li className='skillS'>Algorithms</li>
                  <li className='skillS'>HTML || CSS</li>
                  <li className='skillS'>Bootstrap</li>
                  <li className='skillS'>Javascript || Jquery</li>
                  <li className='skillS'>ReactJS || NodeJS </li>
                  <li className='skillS'>ExpressJs </li>
                  
                  <li className='skillS'>Git || Github</li>
                  <li className='skillS'>MongoBD || Heroku</li>
                  <li className='skillS'>Firebase</li>
                </ul>
              </div>
              </div>
            </div>
            <div className='aboutImg'  data-aos="fade-up-left">
                <img className='imgMe' src={portfolio} alt='me'/>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default About
