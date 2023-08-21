import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import PRLogo from './imgs/prlogo.png';
import './css/header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsOpen((open) => !open);
    }

    return (
        <header>
            <div className='container-header'>
                <div className='container-top'>
                    <Link to='/'><img src={PRLogo} alt='Prevost Roofing Logo' className='logo-header' /></Link>
                    <div className='container-useful-informations'>
                        <div className='container-location'>
                            <div className='icon'><FontAwesomeIcon icon={faMapPin} /></div>
                            <div>
                                <h3>Location</h3>
                                <p>Alfred, Ontario K0B 1A0</p>
                            </div>
                        </div>
                        <div className='container-phone'>
                            <div className='icon'><FontAwesomeIcon icon={faPhone} /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>999-999-9999</p>
                            </div>
                        </div>
                        <div className='container-email'>
                            <div className='icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>prevost_roofing@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='navbar'>
                    <nav>
                        <ul className={`navlinks ${isOpen ? 'is-open' : ''}`}>
                            <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                            <li><Link to='/pictures' onClick={toggleMenu}>Pictures</Link></li>
                            <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
                            <li><Link to='/contact-us' onClick={toggleMenu}>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className='navbar-button'>
                        <FontAwesomeIcon className='icon-mobile' onClick={toggleMenu} icon={isOpen ? faX : faBars} />
                        <Link to='/contact-us' className='get-a-quote'>Get a quote</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
