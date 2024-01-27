"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './NavLarge.css'

function NavLarge({ smallNavToggle }) {

    const [activeNav, setActiveNav] = useState('home')

    return (
        <div className="container">
            <div className="nav_large">
                <Link href='/' className='logo_wrapper'>
                    <Image
                        src='/Medipac.svg'
                        alt='brand'
                        width={127}
                        height={50}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Link>
                <nav>
                    <Link
                        href="#About"
                        className={`${activeNav === "home" ? 'active' : ''}`}
                        onClick={() => setActiveNav('home')}
                    >
                        About us
                    </Link>
                    <Link
                        href=""
                        className={`${activeNav === "service" ? 'active' : ''}`}
                        onClick={() => setActiveNav('service')}
                    >
                        Products & Services
                    </Link>

                    <Link
                        href="#Solutions"
                        className={`${activeNav === "solutions" ? 'active' : ''}`}
                        onClick={() => setActiveNav('solutions')}
                    >
                        Solutions
                    </Link>
                    <Link
                        href="#Resources"
                        className={`${activeNav === "resources" ? 'active' : ''}`}
                        onClick={() => setActiveNav('resources')}
                    >
                       Resources
                    </Link>
                    <Link
                        href="contactUs"
                        className={`${activeNav === "contact" ? 'active' : ''}`}
                        onClick={() => setActiveNav('contact')}
                    >
                       Contact us
                    </Link>
                </nav>
                <button className="btn_nst" onClick={smallNavToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                        <path d="M4.66669 7C4.66669 6.44772 5.1144 6 5.66669 6H22.3334C22.8856 6 23.3334 6.44772 23.3334 7C23.3334 7.55228 22.8856 8 22.3334 8H5.66669C5.1144 8 4.66669 7.55228 4.66669 7ZM7.46669 12.0943C7.46669 11.5986 7.86525 11.195 8.36094 11.1887L22.3271 11.0127C22.8808 11.0057 23.3334 11.4526 23.3334 12.0063C23.3334 12.5551 22.8885 13 22.3397 13H8.37236C7.87217 13 7.46669 12.5945 7.46669 12.0943ZM11.2 17C11.2 16.4477 11.6477 16 12.2 16H22.3334C22.8856 16 23.3334 16.4477 23.3334 17C23.3334 17.5523 22.8856 18 22.3334 18H12.2C11.6477 18 11.2 17.5523 11.2 17Z" fill="#393939" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NavLarge