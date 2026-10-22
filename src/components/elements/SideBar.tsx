"use client";
import React from 'react';
import Link from 'next/link';
import Logo from "@/assets/images/logo.svg";
import { useTranshubContext } from '../context/useTranshubContext';
import Image from 'next/image';

const SideBar: React.FC = () => {
    const { isSidebar, setIsSidebar } = useTranshubContext();
    return (
        <div className={`canvas-menu d-flex flex-column ${isSidebar ? 'open' : ''} `}>
            <div className="d-flex justify-content-between w-100 mb-4">
                {/* Logo Here */}
                <div className="logo">
                    <Image src={Logo} width={175} height={45} loading="eager" alt="Logo" />
                </div>
                {/* Close Button */}
                <button type="button" onClick={() => setIsSidebar((pre) => !pre)} className="canvas-close" aria-label="Close">
                    <svg width="33" height="34" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
            <p>We are a reliable transport agency providing safe and timely logistics solutions.
                Our services cover local and long-distance transportation needs.</p>
            {/* Vertical Menu Start*/}

            <div className="mt-3">
                <h5>Our Services</h5>
                <nav className="mt-4">
                    <ul className="vertical-menu">
                        <li><Link href="/single-service">Air Fright</Link></li>
                        <li><Link href="/single-service">Warehousing</Link></li>
                        <li><Link href="/single-service">Sea Fright</Link></li>
                        <li><Link href="/single-service">Road Fright</Link></li>
                        <li><Link href="/single-service">Customs Brokerage</Link></li>
                    </ul>
                </nav>
            </div>

            {/* social icons */}
            <div className="social-share null mt-3">
                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#"><i className="fab fa-x-twitter"></i></Link>
                <Link href="#"><i className="fab fa-instagram"></i></Link>
                <Link href="#"><i className="fab fa-pinterest"></i></Link>
                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                <Link href="#"><i className="fab fa-youtube"></i></Link>
            </div>
            <Link href="/quote" className="btn btn-primary mt-5"> Get a Quote <i className="fa fa-arrow-right"></i><span></span></Link>
        </div>
    );
};

export default SideBar;