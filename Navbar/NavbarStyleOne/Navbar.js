//Dependencies
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

//Components
import { Button } from '../ui/button/Button';

//CSS
import './Navbar.css';
import { VscRocket } from 'react-icons/vsc';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const onClickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <div class={'navbar'}>
                    <div className="navbar-container container">

                        {/* logo */}
                        <Link
                            to="/"
                            className="navbar-logo" onClick={closeMobileMenu}>
                            <VscRocket className="navbar-icon" />
                            blu<span style={{ color: '#DE98EA', fontFamily: 'Tomorrow', fontWeight: 600}}>pluto</span>
                        </Link>

                        {/* hamburger icon */}
                        <div className="menu-icon" onClick={onClickHandler}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-item">
                                <Link path='/' className="nav-links"
                                    onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link path='/' className="nav-links"
                                    onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link path='/' className="nav-links"
                                    onClick={closeMobileMenu}>
                                    Products
                                </Link>

                            </li>

                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/' className="btn-link"
                                        onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'>
                                            Let's Talk!
                                        </Button>
                                    </Link>
                                ) : (
                                        <Link to='/' className="btn-link">
                                            <Button buttonStyle="btn--outline"
                                                buttonSize='btn--mobile'
                                                onClick={closeMobileMenu}>
                                                Let's Talk!
                                            </Button>
                                        </Link>
                                    )}
                            </li>

                        </ul>

                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
