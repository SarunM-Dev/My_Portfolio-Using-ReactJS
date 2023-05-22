import React from 'react'
import './about.css'
import SchoolIcon from '@mui/icons-material/School';


function About() {
  return (
    <section id='about'>
      <h2 className='text-light'>Academics</h2>
      {/* <h4 className='text-light'>I fell in love with coding when I was 16.
                In school, I learnt basic coding and then I was excited to explore more on Computer Science, So I chose Computer Science.</h4> */}

      <div className="container about__container">
        <div className="about__me">
        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <SchoolIcon className='about__icon'/>
            <h5>B.Sc Computer Science</h5>
            <small>Jul 2017 - Mar 2018</small><br/>
            <small>Tefrs Academy of arts & science college</small><br/>
            <small>CGPA : 7.3</small>
          </article>
          <article className="about__card">
            <SchoolIcon className='about__icon'/>
            <h5>Grade 12</h5>
            <small>Jul 2018 - Mar 2019</small><br/>
            <small>Bishop Ubagarasamy Higher Secoundery School Tirupur</small><br/>
            <small>69.3 %</small>
          </article>
          <article className="about__card">
            <SchoolIcon className='about__icon'/>
            <h5>Grade 10</h5>
            <small>Jul 2016 - Mar 2017</small><br/>
            <small>Bishop Ubagarasamy Higher Secoundery School Tirupur</small><br/>
            <small>65.9 %</small>
          </article>
        </div>
        <p className='about'>
        As an full-stack developer, I possess the skills and knowledge to handle both front-end and back-end development. They are proficient in developing and maintaining web applications and software systems that run on both the client-side and server-side. They are well-versed in various programming languages, frameworks, and tools for building scalable, secure, and robust applications. As a full-stack developer, they are also responsible for ensuring that the application is responsive, meaning it can adapt to different screen sizes and devices, providing an optimal user experience regardless of the platform or device being used.
        </p>
      </div>
      </div>
    
    </div>
</section>

  )
}

export default About
