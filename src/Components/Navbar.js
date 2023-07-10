import { useRef } from "react"
function Navbar() {
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle("response_nav")
  }
  // navbarContents
  return (
    <div className='Navbar'>
        <div className='Logo' > <a href="#home"><span className='firstWord'>Y</span>ana</a></div>
        <div  >
            <nav ref={navRef} className='  x '>
                <li><a className='nItems' href='#home'><span className='orderNavbar'>01. </span>Home</a></li>
                <li><a className='nItems' href='#about'><span className='orderNavbar'>02. </span>About</a></li>
                <li><a className='nItems' href='#experience'><span className='orderNavbar'>03. </span>Experience</a></li>
                <li><a className='nItems' href='#project'><span className='orderNavbar'>04. </span>Project</a></li>
                <li><a className='nItems' href='#contact'><span className='orderNavbar'>05. </span>Contact</a></li>
                <a className='resume' href="https://drive.google.com/file/d/1bX6nC9lT-QRiMVqyize0dlOKaB6FNrIZ/view"  >Resume</a>


                <button onClick={showNavbar} className="nav-btn nav-close-btn flex">
            <i class="fa-solid fa-xmark"></i>
                </button>
                
                
            </nav> 
        </div>
        <button onClick={showNavbar} className="nav-btn flex">
                <i class="fa-solid fa-bars"></i>
                </button>
      
    </div>
  )
}

export default Navbar
