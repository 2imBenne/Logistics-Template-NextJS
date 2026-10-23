"use client";
import AboutSh from "@/assets/images/about-sh.png";
import About1 from "@/assets/images/about-1.png";
import About2 from "@/assets/images/about-2.png";
import AbIcon1 from "@/assets/images/ab-icon1.png";
import AbIcon2 from "@/assets/images/ab-icon2.png";
import CounterUp from "@/components/elements/CounterUp";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return (
        <>
            {/* About Section Start */}
            <section className="about-section position-relative sec-padding">
                <Image src={AboutSh} width={38} height={97} alt="shape" className="anim-img moveY" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-media position-relative">
                                <div className="about-m1">
                                    <Image
                                        className="round img-fluid"
                                        width={388}
                                        height={380}
                                        src={About1}
                                        alt="Image"
                                    />
                                    <div className="ab-stat bg-primary round">
                                        <span
                                            className="display-1 purecounter"
                                        >
                                            <CounterUp ending={2.1} />
                                        </span>
                                        <span className="unit">M</span>
                                        <p>Deliver Goods Every Weeks</p>
                                    </div>
                                </div>
                                <div className="about-m2">
                                    <div className="ab-stat2 bg-dark text-info round">
                                        <span
                                            className="display-1 purecounter"
                                        >
                                            <CounterUp ending={5} />
                                        </span>
                                        <span className="unit">M</span>
                                        <p>Happy Customer</p>
                                    </div>
                                    <Image className="img-fluid" src={About2} width={329} height={316} alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <TextAnimation animationStyle="style1">
                                    <span className="sub-title fadeInUp">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="18"
                                            fill="none"
                                            viewBox="0 0 30 18"
                                        >
                                            <path
                                                fill="#c9322b"
                                                d="M8.125 15.429h-2.5a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h2.5c.166 0 .325.068.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.188m20.313 0h-1.563a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h1.044l.842-4.618c-.011-2.364-1.973-4.382-4.386-4.382h-4.104l-1.989 9h3.593c.166 0 .325.068.442.188a.653.653 0 0 1 0 .91.62.62 0 0 1-.442.188H17.5a.61.61 0 0 1-.488-.242.65.65 0 0 1-.122-.543L19.162 4.36a.65.65 0 0 1 .22-.361.6.6 0 0 1 .39-.14h4.603C27.476 3.857 30 6.452 30 9.642l-.949 5.261a.65.65 0 0 1-.214.377.6.6 0 0 1-.4.148"
                                            />
                                            <path
                                                fill="#c9322b"
                                                d="M24.375 18c-1.722 0-3.125-1.441-3.125-3.214s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S26.098 18 24.375 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928-.841-1.929-1.875-1.929M10.625 18C8.903 18 7.5 16.559 7.5 14.786s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S12.348 18 10.625 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928c0-1.064-.841-1.929-1.875-1.929m-2.5-9h-5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.188h5c.166 0 .325.068.442.189a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-6.25a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.187h6.25c.166 0 .325.067.442.188a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-7.5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h7.5c.166 0 .325.067.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.187"
                                            />
                                            <path
                                                fill="#c9322b"
                                                d="M17.5 15.429h-4.375a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188H17l2.84-12.857H5.625a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909A.62.62 0 0 1 5.625 0h15a.61.61 0 0 1 .488.241.65.65 0 0 1 .122.543L18.11 14.927a.65.65 0 0 1-.22.36.6.6 0 0 1-.39.142"
                                            />
                                        </svg>
                                        Who we are
                                    </span>
                                </TextAnimation>

                                <h2 className="sec-title">
                                    <TextAnimation animationStyle="style1">
                                        The Advantages of Our logistic Transport
                                    </TextAnimation>
                                </h2>
                                <p>
                                    In a free hour when our power of choice is
                                    untram fm melled and when nothing prevents
                                    our being able to do what we to be welcomed
                                    fkjngn ff and every pain avoidedThe
                                    Advantages of Our logistic Transport.
                                </p>
                                <div className="d-sm-flex gap-4 about-feat border-bottom">
                                    <div className="ab-item d-flex align-items-center gap-3">
                                        <Image src={AbIcon1}  width={56} height={50} alt="Image"/>
                                        <h3 className="display-4">
                                            Packaging and crating
                                        </h3>
                                    </div>
                                    <div className="ab-item d-flex align-items-center gap-3">
                                        <Image src={AbIcon2} width={56} height={50} alt="Image" />
                                        <h3 className="display-4">
                                            Certified & Awards winner
                                        </h3>
                                    </div>
                                </div>
                                <ul className="check">
                                    <li>
                                        We will never compromise the safety of
                                        our people
                                    </li>
                                    <li>
                                        With over four decades of experience
                                        providing solutions
                                    </li>
                                </ul>
                                <div className="d-sm-flex align-items-center about-footer gap-5 mt-5">
                                    <Link
                                        href="/about"
                                        className="btn btn-primary"
                                    >
                                        About More
                                        <i className="fa fa-arrow-right"></i>
                                        <span></span>
                                    </Link>

                                    <div className="quick-call d-flex align-items-center">
                                        <span className="bg-dark icon-lg rounded-circle text-info">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <div className="conn-txt ms-3">
                                            <p className="m-0">
                                                Call Us Any Time:
                                            </p>
                                            <a
                                                className="h6 text-primary"
                                                href="tel:148359505285"
                                            >
                                                148 359 505 285
                                            </a>
                                        </div>
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
