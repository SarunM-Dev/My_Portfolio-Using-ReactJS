import React from 'react'
// import './socialicons.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://github.com/SarunM-Dev?tab=repositories" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/__s_a_r_u_n__ss/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sarun-ss-a5807222b/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://twitter.com/home?lang=en-in" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
        </div>
  )
}

export default SocialIcons
