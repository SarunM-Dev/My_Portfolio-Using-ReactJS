import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h2 className='text-light'>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Front-end Dev.</h3>
          <div className="experience__content">
            <article className="experience__details" title='Web Semântica, XML, Web Standards'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>
              <progress value="90" max="100">90%</progress> 
            </article>
            <article className="experience__details" title='Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>JavaScript</h5>
              </div>
            <progress value="90" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>ReactJS</h5>
              </div>
            <progress value="80" max="100"></progress> 
            </article>
            <article className="experience__details" title='Woocommerce, LMS, Customizações, Elementor, Temas e Plugins'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Bootstrap</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Back-End Dev</h3>
          <div className="experience__content">
          <article className="experience__details" title=''>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Java</h5>
              </div>
              <progress value="90" max="100">90%</progress> 
            </article>
            <article className="experience__details" title=''>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Spring Boot</h5>
              </div>
              <progress value="70" max="100">90%</progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>JavaScript</h5>
              </div>
            <progress value="80" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>NodeJS</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
          
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Database</h3>
          <div className="experience__content">
          <article className="experience__details" title='Edição e tratamento'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>MySQL</h5>
              </div>
            <progress value="90" max="100"></progress> 
            </article>
            <article className="experience__details" title='Edição e tratamento'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>MongoDB</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
         
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Experience