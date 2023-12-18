"use client"
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navcomp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavigationBarLand() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar-landing">
                <div className="navbar-container">
                    <Link href="/" className="navbar-logo landing" onClick={closeMobileMenu}>
                        <h1>Aayush Garg</h1>
                    </Link>

                    <div className='menu-icon landing' onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faTimes} style={{ fontSize: 20, color: 'black' }} /> : <FontAwesomeIcon icon={faBars} style={{ fontSize: 20, color: 'black' }} />}
                    </div>

                    <ul className={click ? 'nav-menu active landing' : 'nav-menu landing'}>
                        <li className='nav-item landing'>
                            <Link smooth="true"
                                href='/blogs' className='nav-links-landing landing' style={{ borderTop: 'none' }} onClick={() => { closeMobileMenu() }}>
                                Blogs
                            </Link>
                        </li >
                        <li className='nav-item'>
                            <Link smooth="true"
                                href='/projects' className='nav-links-landing landing' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth="true"
                                href='/games' className='nav-links-landing landing' onClick={closeMobileMenu}>
                                Games
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBarLand;