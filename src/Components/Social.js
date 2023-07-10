import React from 'react'

function Social() {
  return (
    <>
    <div className='socialMedia'>
        <a href='https://github.com/yaminiShrivastava'><i class="fa-brands fa-github sicon"></i></a>
        <a href='https://www.linkedin.com/in/yamini-srivastava-63084a219/'><i class="fa-brands fa-linkedin-in sicon"></i></a>
        <a href='https://www.instagram.com/srivastava_yami/'><i class="fa-brands fa-instagram sicon"></i></a>
        <a href='https://leetcode.com/yamini5998/'><i class="fa-solid fa-arrow-up-right-from-square sicon"></i></a>
        <div className='line a'> </div>
    </div>
    <div className='emailContainer'>
    <a href = "mailto: yamini8383@gmail.com"><div className='email '>yamini8383@gmail.com</div> </a>
          
        <div className='line b'> </div>
    </div>
    </>
  )
}

export default Social
