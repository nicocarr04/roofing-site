import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import House from './imgs/house.jpg';
import './css/about.css';

function About() {
  return (
    <main>
      <div className='wrapper'>
        <section className='section-about-us'>
          <div className='containe-who-why'>
            <div className='container-who'>
                <h1>Who we are</h1>
                <h3>Opt for the perfect fit for your home</h3>
                <p>At Prevost Roofing, we put our customers first. Your satisfaction is our top priority. With a team of experienced and caring roofers, we are dedicated to building your roof the right way and take pride in every project we undertake.</p>
            </div>
            <div className='container-why-us'>
              <div className='about-colum-wrap'>
                <div className='push-right'>
                  <FontAwesomeIcon className='circleright-icon' icon={faCircleRight}/>
                  <h4>Skilled Roofing Experts</h4>
                </div>
                <div>
                  <FontAwesomeIcon className='circleright-icon' icon={faCircleRight}/>
                  <h4>Reliable Assurance</h4>
                </div>
              </div>
              <div className='about-colum-wrap'>
                <div className='push-right'>
                  <FontAwesomeIcon className='circleright-icon' icon={faCircleRight}/>
                  <h4>Quality Work</h4>
                </div>
                <div>
                  <FontAwesomeIcon className='circleright-icon' icon={faCircleRight}/>
                  <h4>Trusted Coverage</h4>
                </div>
              </div>
            </div>
          </div>
          <img src={House} className='who-image'></img>
        </section>
      </div>
    </main>
  )
}

export default About