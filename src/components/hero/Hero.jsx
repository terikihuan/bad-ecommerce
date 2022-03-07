import React from 'react'
import './hero.css'

// Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

// Data
import hero_img from '../../data/hero_images.json'

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>大鑫电子</h1>
        <p>不断地追求优秀，您家唯一的选择</p>
      </div>
      
      <Carousel className="carousel">
        {hero_img.map((image) => {
          const {id, image_url} = image
          return (
          <Carousel.Item key={id}>
            <div className="heroImage" style={{
              backgroundImage: `url(${image_url})`
            }}></div> 
          </Carousel.Item> )
        })}
      </Carousel>
    </div>
  )
}

export default Hero