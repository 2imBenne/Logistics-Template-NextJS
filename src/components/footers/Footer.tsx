"use client";

import Swal from "sweetalert2";
import PaperPlane from "@/assets/images/icons/paper-plane.png";
import FooterBg from "@/assets/images/footer-bg.jpg";
import LogoW from "@/assets/images/logo-w.svg";
import JarallaxSection from "../elements/JarallaxSection";
import TextAnimation from "../elements/TextAnimation";
import FadeInAdvanced from "../elements/FadeInAdvanced";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const Email = formData.get("email") as string;

        // Validate all fields are filled
        if (Email) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you for subscribing!",
                text: "You'll receive our latest updates in your inbox.",
                showConfirmButton: false,
                timer: 2000
            });
            form.reset();
        }
    };
    return (
        <>
            {/* Footer Start */}
            <JarallaxSection as='footer' imgSrc={FooterBg.src} speed={.2} className="footer bg-cover jarallax" overlayOpacity={.9} >
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center footer-top">
                        <div className="subs-head">
                            <h2 className="display-4 text-white sec-title">
                                <TextAnimation animationStyle="style1">
                                    Subscribe Our Newsletter
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="subs-widget ">
                            <FadeInAdvanced variant="fadeInUp">
                                <form onSubmit={handleSubmitChat} className="position-relative">
                                    <input type="email" name="email" placeholder="Your Email" />
                                    <button className="btn btn-primary rounded-5">
                                        Subscribe <Image src={PaperPlane} width={21} height={21} alt="Image" />
                                        <span></span>
                                    </button>
                                </form>
                            </FadeInAdvanced>
                        </div>

                    </div>
                    <div className="row footer-widgets">
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget about-footer">
                                <div className="f-logo">
                                    <Link href="/">
                                        <Image src={LogoW} width={220} height={56} alt="Logo" />
                                    </Link>
                                </div>
                                <p>
                                    Our dedication lies in embracing challeng es
                                    and pioneering innovation within the more
                                    atractive advertising sector.
                                </p>
                                <div className="social-share">
                                    <Link href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-x-twitter"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 offset-sm-1 offset-lg-0">
                            <div className="footer-widget">
                                <h3 className="widget-title">Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Our Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/projects">Project</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">{`FAQ's`}</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Our Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 ps-lg-5 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="widget-title">Our Services</h3>
                                <ul>
                                    <li>
                                        <Link href="/single-service">
                                            Ship Fright Shipping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-service">
                                            Less Than Truckload
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-service">
                                            Container Freight
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-service">
                                            Adult Health
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-service">
                                            Rail Freight Shipping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-service">
                                            Air Fright Trucking
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 offset-sm-1 offset-lg-0">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title">Opening Hours</h3>
                                <div className="opening-inner">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span>Week Days</span>
                                        <span>09.00 - 7.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span>Saturday</span>
                                        <span>08.00 - 2.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span>Sunday</span>
                                        <span>Day Off</span>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="btn btn-info btn-xs mt-4"
                                >
                                    Contact Us <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <p className="text-info copy-right mb-0 order-2 order-md-1">
                                Copyright &copy; 2026
                                <Link href="#">Transhub</Link> All Rights
                                Reserved.
                            </p>
                            <nav className="footer-nav order-1 order-md-2">
                                <ul>
                                    <li>
                                        <Link href="#">Privacy Policy </Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms & Condition</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Footer End */}
        </>
    );
}
