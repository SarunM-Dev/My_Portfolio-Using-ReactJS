import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { BsEnvelope } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Message Sent! Thank you.")
    e.target.reset()
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  return (
    <>
    <section id='contact'>
      <h2 className='text-light'>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options row">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>sarun9025ss@gmail.com</h5>
            <a href="mailto:sarun9025ss@gmail.com" >Message</a>
          </article>
          <article className="contact__option">
            <LocationOnIcon className="contact__option-icon" />
            <h4>Location</h4>
            <h5>Coimbatore</h5>
            <a href="https://www.bing.com/maps?osid=89901113-a19f-4777-ae6e-9d126041b241&cp=11.013736~76.879118&lvl=11&imgid=d55169e5-554c-4b23-a91d-10692c745b5a&v=2&sV=2&form=S00027" target="_blank" rel="noopener noreferrer">Location</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9025220184</h5>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Message</a>
          </article>
        </div>
        </div>
    </section>
    </>
  )
}

export default Contact