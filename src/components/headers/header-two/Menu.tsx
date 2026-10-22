"use client";
import LogoW from "@/assets/images/logo-w.svg"; 
import { useTranshubContext } from "@/components/context/useTranshubContext";
import Image from "next/image";
import Link from "next/link";
import MenuList from "../MenuList";
export default function Menu() { 
    const { setIsSearch, setIsSidebar, isMobile, setIsMobile } = useTranshubContext();
    return (
        <>
            <div className="container ct-container">
                <Link href="/" className="navbar-brand">
                    <Image src={LogoW} width={220} height={56} alt="logo" className="img-fluid" />
                </Link>
                <button
                    onClick={() => setIsMobile(pre => !pre)}
                    className="navbar-toggler offcanvas-nav-btn"
                    type="button"
                >
                    Menu
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                        fill="none"
                        viewBox="0 0 14 12"
                    >
                        <path
                            fill="#020e28"
                            d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75"
                        />
                    </svg>
                </button>
                <div className="nav-cta d-none d-md-flex  order-lg-3">
                    <div className="d-flex align-items-center justify-content-between gap-3">
                        <Link
                            href="/cart"
                            className="icon-lg position-relative bg-light rounded-circle"
                        >
                            <i className="fa fa-shopping-cart"></i>
                            <sup>2</sup>
                        </Link>
                        <Link
                            href="#"
                            onClick={() => setIsSearch(pre => !pre)}
                            className="icon-lg bg-light rounded-circle"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas-search"
                        >
                            <i className="fa fa-search"></i>
                        </Link>
                        <button onClick={() => setIsSidebar(pre => !pre)} className="burger-menu icon-lg bg-light rounded-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="12"
                                fill="none"
                                viewBox="0 0 14 12"
                            >
                                <path
                                    fill="#020e28"
                                    d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75"
                                />
                            </svg>
                        </button>
                        <Link href="/quote" className="btn btn-primary btn-hover">

                            Free Quote <i className="fa fa-arrow-right"></i>
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div className={`offcanvas offcanvas-start offcanvas-nav ${isMobile ? 'show' : ''}`}>
                    <div className="offcanvas-header">
                        <Link href="/" className="text-inverse">
                            <Image src={LogoW} width={220} height={56} alt="Logo" />
                        </Link>
                        <button
                            onClick={() => setIsMobile(pre => !pre)}
                            type="button"
                            className="btn-close bg-primary"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body pt-0 align-items-center justify-content-between">
                        <MenuList />
                    </div>
                </div>
            </div>
        </>
    );
}
