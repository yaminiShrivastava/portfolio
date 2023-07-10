import React from 'react'
import SkillCard from './SkillCard'

function Skill() {
  return (
    <div>

      <div className='Heading'>TechStack</div>
      <div className='skillPage 'data-aos="zoom-in">

        <SkillCard img="https://vishal.ninja/static/media/html.2ba4fabc69a89a8f71e6.png" sName="HTML"/>
        <SkillCard img="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" sName="Bootstrap"/>
        <SkillCard img="	https://vishal.ninja/static/media/javascript.1ccd6ef9bb1f9c84ef00.png" sName="Javascript"/>
        <SkillCard img="https://www.manektech.com/storage/developer/1646733543.webp" sName="ExpressJS"/>
        <SkillCard img="	https://vishal.ninja/static/media/react.0cf951a69d8e58f83f9d.png" sName="ReactJs"/>
        <SkillCard img="https://vishal.ninja/static/media/node.952a9ea986dcfa5229ad.png" sName="NodeJs"/>
        <SkillCard img="https://vishal.ninja/static/media/mongo.2a1528ddc31d4ce8518d.png" sName="MongoDb"/>
        <SkillCard img="https://vishal.ninja/static/media/github.3b9e32903aa89111875d.png" sName="GitHub"/>
      </div>
    </div>
  )
}

export default Skill
