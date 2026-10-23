"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranshubContext } from "../context/useTranshubContext";

export default function MenuList() {
    const { setIsMobile } = useTranshubContext();
    const location = usePathname();
    const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

    useEffect(() => {
        setIsMobile(false);
    }, [location, setIsMobile]);

    // Calculate current paths based on location using useMemo
    const currentPaths = useMemo(() => {
        const currentPath = location;
        const paths = new Set<string>();

        // Menu structure for matching
        const menuItems = [
            { key: 'home', paths: ['/', '/index-2', '/index-3'] },
            { key: 'services', paths: ['/services', '/services-2', '/single-service'] },
            { key: 'about', paths: ['/about'] },
            { key: 'quote', paths: ['/quote'] },
            { key: 'tracking', paths: ['/tracking'] },
            { key: 'team', paths: ['/team', '/single-team'] },
            { key: 'shop', paths: ['/shop', '/single-product', '/cart', '/checkout', '/login', '/register'] },
            { key: 'pricing', paths: ['/pricing'] },
            { key: 'faq', paths: ['/faq'] },
            { key: '404', paths: ['/404'] },
            { key: 'projects', paths: ['/case-studies', '/case-studies-2', '/single-casestudy', '/project-star'] },
            { key: 'blog', paths: ['/blog', '/blog-2', '/blog-classic', '/single-post', '/single-post-2', '/news-nttho'] },
            { key: 'contact', paths: ['/contact'] },
        ];

        menuItems.forEach(({ key, paths: itemPaths }) => {
            itemPaths.forEach(path => {
                if (currentPath === path || currentPath.startsWith(path + '/')) {
                    paths.add(key);
                }
            });
        });

        // Add parent dropdown keys
        if (paths.has('about') || paths.has('quote') || paths.has('tracking') ||
            paths.has('team') || paths.has('shop') || paths.has('pricing') ||
            paths.has('faq') || paths.has('404')) {
            paths.add('pages');
        }

        if (paths.has('team')) paths.add('team-dropdown');
        if (paths.has('shop')) paths.add('shop-dropdown');
        if (paths.has('blog')) paths.add('blog-details-dropdown');

        return paths;
    }, [location]);

    // Handle dropdown toggle
    const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement>, dropdownKey: string) => {
        e.preventDefault();
        setOpenDropdowns(prev => {
            const newSet = new Set<string>();
            if (!prev.has(dropdownKey)) {
                newSet.add(dropdownKey);
            }
            return newSet;
        });
    };

    const isActive = (key: string) => currentPaths.has(key);
    const isOpen = (key: string) => openDropdowns.has(key);

    return (
        <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className={`nav-item dropdown ${isActive('home') ? 'current' : ''} ${isOpen('home') ? 'show' : ''}`}>
                <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={(e) => handleDropdownToggle(e, 'home')}
                    aria-expanded={isOpen('home')}
                >
                    Home
                </Link>
                <ul className={`dropdown-menu ${isOpen('home') ? 'show' : ''}`}>
                    <li className={isActive('home') && location === '/' ? 'current' : ''}>
                        <Link href="/" className="dropdown-item">
                            Home 1
                        </Link>
                    </li>
                    <li className={isActive('home') && location === '/index-2' ? 'current' : ''}>
                        <Link href="/index-2" className="dropdown-item">
                            Home 2
                        </Link>
                    </li>
                    <li className={isActive('home') && location === '/index-3' ? 'current' : ''}>
                        <Link href="/index-3" className="dropdown-item">
                            Home 3
                            <span className="badge bg-dark ms-2">New</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className={`nav-item dropdown ${isActive('services') ? 'current' : ''} ${isOpen('services') ? 'show' : ''}`}>
                <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={(e) => handleDropdownToggle(e, 'services')}
                    aria-expanded={isOpen('services')}
                >
                    Services
                </Link>
                <ul className={`dropdown-menu ${isOpen('services') ? 'show' : ''}`}>
                    <li className={location === '/services' ? 'current' : ''}>
                        <Link href="/services" className="dropdown-item">
                            Services
                        </Link>
                    </li>
                    <li className={location === '/services-2' ? 'current' : ''}>
                        <Link href="/services-2" className="dropdown-item">
                            Services 2
                        </Link>
                    </li>
                    <li className={location === '/single-service' ? 'current' : ''}>
                        <Link href="/single-service" className="dropdown-item">
                            Services Details
                        </Link>
                    </li>
                </ul>
            </li>

            <li className={`nav-item dropdown ${isActive('pages') ? 'current' : ''} ${isOpen('pages') ? 'show' : ''}`}>
                <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={(e) => handleDropdownToggle(e, 'pages')}
                    aria-expanded={isOpen('pages')}
                >
                    Pages
                </Link>
                <ul className={`dropdown-menu ${isOpen('pages') ? 'show' : ''}`}>
                    <li className={location === '/about' ? 'current' : ''}>
                        <Link href="/about" className="dropdown-item">
                            About Us
                        </Link>
                    </li>
                    <li className={location === '/quote' ? 'current' : ''}>
                        <Link href="/quote" className="dropdown-item">
                            Request Quote
                        </Link>
                    </li>
                    <li className={location === '/tracking' ? 'current' : ''}>
                        <Link href="/tracking" className="dropdown-item">
                            Tracking
                        </Link>
                    </li>
                    <li className={`dropdown-submenu dropend ${isActive('team') ? 'current' : ''}`}>
                        <Link href="#" className="dropdown-item dropdown-toggle">
                            Team
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">Our Team</li>
                            <li className={location === '/team' ? 'current' : ''}>
                                <Link href="/team" className="dropdown-item">
                                    Our Team
                                </Link>
                            </li>
                            <li className={location === '/single-team' ? 'current' : ''}>
                                <Link href="/single-team" className="dropdown-item">
                                    Team Details
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={`dropdown-submenu dropend ${isActive('shop') ? 'current' : ''}`}>
                        <Link className="dropdown-item dropdown-toggle" href="#">
                            Shop
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">Shop Pages</li>
                            <li className={location === '/shop' ? 'current' : ''}>
                                <Link href="/shop" className="dropdown-item">
                                    Shop
                                </Link>
                            </li>
                            <li className={location === '/single-product' ? 'current' : ''}>
                                <Link href="/single-product" className="dropdown-item">
                                    Product Details
                                </Link>
                            </li>
                            <li className={location === '/cart' ? 'current' : ''}>
                                <Link href="/cart" className="dropdown-item">
                                    Cart
                                </Link>
                            </li>
                            <li className={location === '/checkout' ? 'current' : ''}>
                                <Link href="/checkout" className="dropdown-item">
                                    Checkout
                                </Link>
                            </li>
                            <li className={location === '/login' ? 'current' : ''}>
                                <Link href="/login" className="dropdown-item">
                                    Login
                                </Link>
                            </li>
                            <li className={location === '/register' ? 'current' : ''}>
                                <Link href="/register" className="dropdown-item">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={location === '/pricing' ? 'current' : ''}>
                        <Link href="/pricing" className="dropdown-item">
                            Pricing
                        </Link>
                    </li>
                    <li className={location === '/faq' ? 'current' : ''}>
                        <Link href="/faq" className="dropdown-item">
                            FAQ
                        </Link>
                    </li>
                    <li className={location === '/404' ? 'current' : ''}>
                        <Link href="/404" className="dropdown-item">
                            404 Error
                        </Link>
                    </li>
                </ul>
            </li>

            <li className={`nav-item dropdown ${isActive('projects') ? 'current' : ''} ${isOpen('projects') ? 'show' : ''}`}>
                <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={(e) => handleDropdownToggle(e, 'projects')}
                    aria-expanded={isOpen('projects')}
                >
                    Projects
                </Link>
                <ul className={`dropdown-menu ${isOpen('projects') ? 'show' : ''}`}>
                    <li className={location === '/project-star' ? 'current' : ''}>
                        <Link href="/project-star" className="dropdown-item text-danger fw-bold">
                            <i className="fa-solid fa-star me-1"></i> Dự Án Star
                        </Link>
                    </li>
                    <li className={location === '/case-studies' ? 'current' : ''}>
                        <Link href="/case-studies" className="dropdown-item">
                            Projects
                        </Link>
                    </li>
                    <li className={location === '/case-studies-2' ? 'current' : ''}>
                        <Link href="/case-studies-2" className="dropdown-item">
                            Projects 2
                        </Link>
                    </li>
                    <li className={location === '/single-casestudy' ? 'current' : ''}>
                        <Link href="/single-casestudy" className="dropdown-item">
                            Project Details
                        </Link>
                    </li>
                </ul>
            </li>

            <li className={`nav-item dropdown ${isActive('blog') ? 'current' : ''} ${isOpen('blog') ? 'show' : ''}`}>
                <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={(e) => handleDropdownToggle(e, 'blog')}
                    aria-expanded={isOpen('blog')}
                >
                    Blog
                </Link>
                <ul className={`dropdown-menu ${isOpen('blog') ? 'show' : ''}`}>
                    <li className={location === '/news-nttho' ? 'current' : ''}>
                        <Link href="/news-nttho" className="dropdown-item text-danger fw-bold">
                            <i className="fa-solid fa-star me-1"></i> Tin Tức NTTHO
                        </Link>
                    </li>
                    <li className={location === '/blog' ? 'current' : ''}>
                        <Link href="/blog" className="dropdown-item">
                            Blog Grid 01
                        </Link>
                    </li>
                    <li className={location === '/blog-2' ? 'current' : ''}>
                        <Link href="/blog-2" className="dropdown-item">
                            Blog Grid 02
                        </Link>
                    </li>
                    <li className={location === '/blog-classic' ? 'current' : ''}>
                        <Link href="/blog-classic" className="dropdown-item">
                            Blog Classic
                        </Link>
                    </li>
                    <li className={`dropdown-submenu dropend ${isActive('blog') && (location === '/single-post' || location === '/single-post-2') ? 'current' : ''}`}>
                        <Link className="dropdown-item dropdown-toggle" href="#">
                            Blog Details
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">Blog Single</li>
                            <li className={location === '/single-post' ? 'current' : ''}>
                                <Link href="/single-post" className="dropdown-item">
                                    Single Post 01
                                </Link>
                            </li>
                            <li className={location === '/single-post-2' ? 'current' : ''}>
                                <Link href="/single-post-2" className="dropdown-item">
                                    Single Post 02
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li className={`nav-item ${isActive('contact') ? 'current' : ''}`}>
                <Link href="/contact" className="nav-link">
                    Contact Us
                </Link>
            </li>
        </ul>
    );
}