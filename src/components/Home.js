import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faCommentDollar, faHeadphones, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import House from './imgs/homecare/house.jpg';
import House2 from './imgs/homecare/house2.jpg';
import House3 from './imgs/homecare/house3.jpg';
import Roof from './imgs/homecare/roof.jpg';
import Roof2 from './imgs/homecare/roof2.jpg';
import onRoof from './imgs/on-the-roof.jpeg';
import './css/home.css';

function Home() {
  return (
    <main>
      <div className='wrapper'>
        <section className='top-row-home'>
          <div className='card'>
            <div className='card-top'>
              <div className='icon-home'><FontAwesomeIcon icon={faShield} /></div>
              <h2>Uncompromising Reliability</h2>
            </div>
            <p className='description'>We take great care in selecting only the most reliable and durable roofing materials. Our products undergo rigorous testing to meet industry standards, giving you peace of mind that your roof will withstand the harshest elements for years to come.</p>
          </div>
          <div className='card'>
            <div className='card-top'>
              <div className='icon-home'><FontAwesomeIcon icon={faCommentDollar} /></div>
              <h2>In-Depth Consultations</h2>
            </div>
            <p className='description'>We believe that informed decisions lead to the best outcomes. Our experienced consultants will walk you through all available roofing options, explaining the benefits and considerations of each. You'll have a clear understanding of the choices at hand, enabling you to make well-informed decisions.</p>
          </div>
          <div className='card'>
            <div className='card-top'>
              <div className='icon-home'><FontAwesomeIcon icon={faHeadphones} /></div>
              <h2>Exceptional Customer Services</h2>
            </div>
            <p className='description'>At Prevost Roofing, you are our top priority. Our customer-centric approach means that we listen attentively to your needs, provide transparent communication throughout the process, and tailor our services to match your specific requirements.</p>
          </div>
        </section>
        <section className='home-care'>
          <div className='care-top'>
            <h1>Home Care</h1>
            <p className='description'>From installing to remodeling, fixing and replacing, our team of specialists can do it all. Having years of experience and expertise in the Ottawa and surrounding area our work speaks for itself. Our goal is to surpass your quality & experience expectations.</p>
          </div>
          <div className='container-scroller-buttons'>
            <div className='galleries-of-houses-arrows'>
              <FontAwesomeIcon className='arrow-icon' icon={faCaretLeft}/>
              <div className='grid-picture-scroller'>
                <img src={House}></img>
                <img src={House2}></img>
                <img src={House3}></img>
                <img src={Roof}></img>
                <img src={Roof2}></img>
              </div>
              <FontAwesomeIcon className='arrow-icon' icon={faCaretRight}/>
            </div>
            <Link to='/pictures' className='find-more-button'>Find out more</Link>
          </div>
        </section>
        <section className='experience'>
          <div className='title-frame-with-image'>
            <div className='container-experience-buttons'>
              <div className='experience-roofing-title'>
                <h1>Experienced In Most Roofing Applications</h1>
                <p className='description description-title'>With experience in almost every roofing applications Prevost Roofing will offer you the best quality work needed for your roof.</p>
              </div>
              <div className='free-descriptions'>
                <div className='box-tinyheader-with-paragraph'>
                  <h3>Free Estimates</h3>
                  <p className='description'>We provide every customers with a free estimate of there roof costs in a timely manner.</p>
                </div>
                <div className='box-tinyheader-with-paragraph'>
                  <h3>Free Customer Support</h3>
                  <p className='description'>Any questions or support needed for your roof, we have a full-time consultant awaiting your call.</p>
                </div>
              </div>
              <Link to='/contact-us' className='get-quote-button'>Get a quote</Link>           
            </div>
            <img src={onRoof} className='img-experience'></img>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home