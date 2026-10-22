"use client";

import Stat1 from "@/assets/images/stat1.png";
import Sta2 from "@/assets/images/sta2.png";
import Stat3 from "@/assets/images/stat3.png";
import Stat4 from "@/assets/images/stat4.png";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import CounterUp from "@/components/elements/CounterUp";
import Image from "next/image";

export default function StatSec() {
    return (
        <>
            {/* Stat Section End */}
            <section className="stat-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={200}>
                                <div
                                    className="single-stat fadeInUp"
                                >
                                    <Image src={Stat1} width={63} height={60} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span
                                                className=" purecounter"
                                                data-purecounter-end="120"
                                            >
                                                <CounterUp ending={120} />
                                            </span>
                                            K
                                        </h3>
                                        <p>Successful Transportation</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={400}>
                                <div
                                    className="single-stat fadeInUp"
                                    data-delay=".4"
                                >
                                    <Image src={Sta2} width={60} height={60} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span
                                                className=" purecounter"
                                            >
                                                <CounterUp ending={50} />
                                            </span>
                                            +
                                        </h3>
                                        <p>Expert Team Member</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={600}>
                                <div
                                    className="single-stat fadeInUp"
                                >
                                    <Image src={Stat3}width={60} height={60}  alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span
                                                className=" purecounter"
                                            >
                                                <CounterUp ending={50} />
                                            </span>
                                            +
                                        </h3>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={800}>
                                <div
                                    className="single-stat fadeInUp"
                                    data-delay=".8"
                                >
                                    <Image src={Stat4}width={60} height={60}  alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span
                                                className=" purecounter"
                                            >
                                                <CounterUp ending={50} />
                                            </span>
                                            K
                                        </h3>
                                        <p>Staisfied Customers</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                    </div>
                </div>
            </section>
            {/* Stat Section Start */}
        </>
    );
}
