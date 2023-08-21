import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faCommentDollar, faHeadphones, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './css/contact.css'

function Contact() {
  return (
    <main>
      <div className='wrapper'>
        <div className='contact-flex'>
          <section className='top-row-contact'>
            <div className='container-title-paragraph'>
              <h1>Request a Quote Today!</h1>
              <p>At Prevost Roofing, we share an equal pride in our craftsmanship, consistently striving to guarantee the highest standards of quality and an exceptional overall customer experience.</p>
            </div>
            <div className='contact-card'>
              <div className='contact-card-top'>
                <div className='icon-contact'><FontAwesomeIcon icon={faCommentDollar} /></div>
                <h2>Call Us</h2>
              </div>
              <h3>999-999-9999</h3>
              <div className='contact-card-top'>
                <div className='icon-contact'><FontAwesomeIcon icon={faShield} /></div>
                <h2>Email</h2>
              </div>
              <h3>prevost_roofing@outlook.com</h3>
            </div>
          </section>
          <section className='section-form'>
            <div className='container-contact'>
              <div className='container-form'>
                <form className='form'>
                  <input placeholder='Name'></input>
                  <input placeholder='Email'></input>
                  <input placeholder='Telephone'></input>
                  <textarea placeholder='Message'></textarea>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Contact
