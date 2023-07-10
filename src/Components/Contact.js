import React from 'react'

function Contact() {
  return (
    <div className='contactPage' data-aos="zoom-out-down" id='contact'>
        <div className='Heading'>Get In Touch</div>
        <div className='centreText contactContent'>
        My inbox is always open. Whether you have a question <br/>or just want to say hello, I'll try my best to get back to you! Feel<br/> free to mail me about any relevant job updates.
        </div>
        <div className='centreText'>
        <a href = "mailto: yamini8383@gmail.com"><button className='contactBtn'>Mail Me</button></a>
        </div>
    </div>
  )
}

export default Contact
