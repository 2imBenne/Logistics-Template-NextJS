
"use client";

import Clients from "@/assets/images/clients.png";
import Hero3Img from "@/assets/images/hero-3.png";
import Home3Bg from "@/assets/images/home3-bg.jpg";
import JarallaxSection from "@/components/elements/JarallaxSection";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Link from "next/link";
import Image from "next/image";

export default function Hero3() {
    return (
        <>
            {/* Hero 3 Section Start */}
            <JarallaxSection className="hero-3 jarallax" speed={.4} overlayOpacity={.8} imgSrc={Home3Bg.src}>
                <div className="container ct-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <FadeInAdvanced variant="fadeInUp">
                                <div className="hero-content">
                                    <span className="lead text-uppercase round">
                                        Plan, transport and finish
                                    </span>
                                    <h1 className="display-1 text-info fw-bold">
                                        Choose Your Next Big Step
                                    </h1>
                                    <p>
                                        Streamlining your logistics with
                                        transportation solutions timely deliveries
                                        and exceptional service worldwide.
                                    </p>
                                    <div className="hero-cta d-sm-flex align-items-center">
                                        <Link
                                            href="/quote"
                                            className="btn btn-primary"
                                        >
                                            Free Quote!
                                            <i className="fa fa-arrow-right"></i>
                                        </Link>
                                        <div className="d-flex align-items-center ms-sm-4">
                                            <Image src={Clients} width={118} height={56} alt="image"/>
                                            <div className="stat-count d-flex gap-4 align-items-center">
                                                <span className="icon-lg bg-info fw-bold rounded-circle text-primary">
                                                    2.5M
                                                </span>
                                                <h2 className="display-6 fw-bold text-info m-0">
                                                    Order Commplete
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-8">
                            <FadeInAdvanced variant="fadeInRight">
                                <div className="hero-media">
                                    <Image src={Hero3Img} width={1073} height={853} alt="image" className="img-fluid" />
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Hero 3 Section End */}
        </>
    );
}
