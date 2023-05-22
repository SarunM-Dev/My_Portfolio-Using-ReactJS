import React from 'react'
import './footer.css'
import SocialIcons from '../socialicons/SocialIcons'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sarun M</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <SocialIcons position='footer__socialicons' />
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} Sarun M. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
