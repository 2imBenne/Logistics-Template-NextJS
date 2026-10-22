"use client";

import AboutD from "@/assets/images/about-d.jpg";
import Time from "@/assets/images/icons/time.svg";
import Location from "@/assets/images/icons/location.svg";
import Employee from "@/assets/images/icons/employee.svg";
import Revenue from "@/assets/images/icons/revenue.svg";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";

export default function AboutDetails() {
    return (
        <>
            {/* About Section Start */}
            <section className="about-details sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-thumb me-lg-4">
                                <Image className="img-fluid" src={AboutD} width={562} height={391} alt="Image" />
                                <h2 className="display-2">
                                    Digital & Trusted Transport Logistic Company
                                </h2>
                                <Link href="#" className="btn btn-primary">
                                    Request a Quote!
                                    <i className="fa fa-arrow-right"></i>
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="row gy-4 abs-info-wrap">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Years Of Experience
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <Image src={Time} width={38} height={38} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                              <CounterUp ending={25}/> Y
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Global Locations
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <Image src={Location} width={40} height={40} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                               <CounterUp ending={88}/>
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Total Employee
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <Image src={Employee} width={28} height={29} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                                <CounterUp ending={15}/> K
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Annual Revenue
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <Image src={Revenue} width={40} height={40} alt="About" />
                                            <h4
                                                className="display-1 purecounter"
                                            >
                                               <CounterUp ending={30}/> M
                                            </h4>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}
        </>
    );
}
