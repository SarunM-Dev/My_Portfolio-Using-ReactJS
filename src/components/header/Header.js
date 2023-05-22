import React from 'react'
// import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from './1669816025610-01__02.jpg'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hello, My name is</h5>
        <h1 className='text-light'>Sarun M</h1>
        {" "}
        {/* <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Website Creation, Dev. and Hosting 🌐",
              1000,
              "Front-End Dev. 💻",
              1000,
              "Projects, UX|UI Design 🎨",
              1000,
              "E-Learning & Instructional Design 👨‍🏫",
              1000,
              "SEO & Wordpress Optimization 🔎",
              1000,
              "Digital Strategies 🎯",
              1000,
              "Mountainbiking 🚴‍♂️",
              1000,
              ]}
            />
        </h3> */}
        <h4 className="text-light">
         Certified Full Stack Developer
        </h4>
        <h5 className="text-light">Building The User-Friendly Websites And Applications</h5>
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="" className='imgs'/>
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll
        </a>
      </div>
    </header>
  )
}