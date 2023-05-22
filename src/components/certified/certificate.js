import React from 'react'
import './certificate.css'
import img1 from './Html_pages-to-jpg-0001.jpg'
import img2 from './CSS_page-0001.jpg'
import img3 from './Java_page-0001.jpg'
import img4 from './Meta Front-end_page-0001.jpg'
import img5 from './Meta Back-end_page-0001.jpg'
import img6 from './rdbms.jpeg'

function Certificates({ id }) {
  const images = [{
    id: 1,
    src: img1,
  },{
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  }
]

  return (
    <article id={id}>
      <section id='certificates'>
        <h2 className='text-light'>Certificates</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__content">
              <div className="about__cards">
                {images.map(({ id, src }) => (
                  <article className="about__card" key={id}>
                    <img src={src} alt="certificate" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Certificates;
