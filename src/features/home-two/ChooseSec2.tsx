"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { servicesData } from "@/data/servicesData";
import TextAnimation from "@/components/elements/TextAnimation";
import ChooseMain from "@/assets/images/choose-main.png";
import Service2Bg from "@/assets/images/service2-bg.jpg";
import Water from "@/assets/images/icons/water.svg";
import AirHeat from "@/assets/images/icons/air-heat.svg";
import Fan from "@/assets/images/icons/fan.svg";
import Celling from "@/assets/images/icons/celling.svg";
import AcCond from "@/assets/images/icons/ac-cond.svg";
import FloorHeat from "@/assets/images/icons/floor-heat.svg";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Image from 'next/image';
import Link from 'next/link';


export default function ChooseSec2() {
    const swiperRefProject = useRef<SwiperType | null>(null);

    // Navigation handlers for slider
    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };
    return (
        <>
            {/* Services Section Start */}
            <div
                className="services-sec2 sec-padding overflow-hidden bg-cover jarallax"
                data-jarallax
                data-speed=".2"
            >
                <Image src={Service2Bg} style={{ width: "100%", height: "auto" }} alt="parallax" loading="eager" className="jarallax-img" />
                <div className="container ct-container p-0">
                    <div className="row align-items-center serv-header">
                        <div className="col-lg-8">
                            <div className="sec-intro">
                                <span className="sub-title2 fadeInUp single">
                                    Our Services
                                </span>
                                <h2 className="sec-title">
                                    Dependable Import Services for Companies of
                                    All Sizes
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header-slider-nav">
                                <div onClick={projectNextSlide} className="swiper-button-next"></div>
                                <div onClick={projectPrevSlide} className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-slider2 swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRefProject.current = swiper;
                                        }}
                                        modules={[Navigation, Autoplay, Pagination]}
                                        loop={true}
                                        spaceBetween={30}
                                        speed={600}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false
                                        }}
                                        pagination={{
                                            el: ".ct-pagination .swiper-pagination",
                                            clickable: true
                                        }}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 3
                                            },
                                            1400: {
                                                slidesPerView: "auto"
                                            }
                                        }}
                                    >
                                        {servicesData.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slide">
                                                    <div className="service-card2 round bg-info">
                                                        <div className={`serv-thumb bg_image-${index + 1}`}>
                                                            <span className="icon round-2">
                                                                <Image src={service.icon} width={60} height={60} alt='image' />
                                                            </span>
                                                        </div>
                                                        <h3 className="display-4">
                                                            <Link href={service.link}>
                                                                {service.title}
                                                            </Link>
                                                        </h3>
                                                        <p>{service.description}</p>
                                                        <div className="service-footer border-top">
                                                            <Link href="/single-service"
                                                                className="custom-btn"
                                                            >
                                                                <span className="icon rounded-3">
                                                                    <i className="fa fa-arrow-right"></i>
                                                                </span>
                                                                View Details
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Section End */}
            {/* Choose Section Start */}
            <section
                className="choose-sec2 bg-cover sec-padding bg_image" >
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp">
                            Why Choose Us
                        </span>
                        <h2 className="sec-title">
                            <TextAnimation animationStyle="style1">
                                Transportation Services We Are Often Considered
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row g-1">
                        <div className="col-lg-3 col-sm-6">
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    Water Installation
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={Water} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    Air Heating Installation
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={AirHeat} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    Radiator Heating
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={Fan} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-lg-6 d-sm-none d-lg-block">
                            <div className="choose-media">
                                <Image src={ChooseMain} width={596} height={456} loading="eager" alt='image' className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 reverse-choose">
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    Celling Installation
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={Celling} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    AC Conditioning
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={AcCond} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    Floor Heating
                                </h3>
                                <span className="icon bg-primary">
                                    <Image src={FloorHeat} width={40} height={40} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </section>
            {/* Choose Section End */}
        </>
    );
}
