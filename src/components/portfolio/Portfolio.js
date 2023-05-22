import React from 'react'
import './portfolio.css'
import IMG1 from './myproject.jpeg'
import IMG2 from './react.jpeg'
import IMG3 from './bookmyshow.jpeg'

// Data Array portfolio
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce Site',
    github: 'https://github.com',
    demo: ''
  }, {
    id: 2,
    image: IMG2,
    title: 'React Projects',
    github: 'https://github.com',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Book My Show Site',
    github: 'https://github.com',
    demo: 'https://bookmyshow.com.br'
  },
 
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 className="text-light">
       Projects
      </h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, desc , github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{desc}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Site</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio