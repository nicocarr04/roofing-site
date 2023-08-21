import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope, faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import PRLogo from './imgs/prlogo.png';
import './css/footer.css';

function Footer() {
  return (
    <footer>
      <div className='container-bottom'>
        <img src={PRLogo} alt='Prevost Roofing Logo' className='logo-footer' />
        <div className='container-title-informations'>
          <h3>Informations</h3>
          <div className='container-information'>
            <div className='icon-bottom'><FontAwesomeIcon icon={faMapPin} /></div>
            <p>Alfred, Ontario K0B 1A0</p>
          </div>
          <div className='container-information'>
            <div className='icon-bottom'><FontAwesomeIcon icon={faPhone} /></div>
            <p>999-999-9999</p>
          </div>
          <div className='container-information'>
            <div className='icon-bottom'><FontAwesomeIcon icon={faEnvelope} /></div>
            <p>prevost_roofing@outlook.com</p>
          </div>
        </div>
        <div className='container-title-schedule'>
          <h3>Schedule</h3>
          <div className='container-work-days'>
            <div className='work-day'>
              <p className='day-of-week'>Monday</p>
              <p className='time-of-week'>8:00 AM - 5:00 PM</p>
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Tuesday</p>
              <p className='time-of-week'>8:00 AM - 5:00 PM</p>
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Wednesday</p>
              <p className='time-of-week'>8:00 AM - 5:00 PM</p>
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Thursday</p>
              <p className='time-of-week'>8:00 AM - 5:00 PM</p>   
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Friday</p>
              <p className='time-of-week'>8:00 AM - 5:00 PM</p>
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Saturday</p>
              <span className='time-of-week closed'>Closed</span>
            </div>
            <div className='work-day'>
              <p className='day-of-week'>Sunday</p>
              <span className='time-of-week closed'>Closed</span>
            </div>
          </div>
        </div>
      </div>
      <div className='container-credits'>
        <p>&copy; Copyright 2023 Prevost Roofing</p>
        <p><a href='https://www.facebook.com/profile.php?&id=100095616819079' target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></p>
        <p><a href='https://nicocarr.ca' target="_blank">Made with ❤️ by Nicolas Carrière</a></p>
      </div>
    </footer>
  )
}

export default Footer