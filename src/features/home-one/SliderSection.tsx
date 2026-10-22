"use client";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import SlideSh1 from "@/assets/images/slide-sh1.png";
import TranckV from "@/assets/images/tranck-v.png";
import TextRotate from "@/assets/images/text-rotate.png";
import Boomark from "@/assets/images/icons/boomark.png";
import Cl1 from "@/assets/images/cl1.png";
import Cl2 from "@/assets/images/cl2.png";
import Cl3 from "@/assets/images/cl3.png";
import Cl4 from "@/assets/images/cl4.png";
import SlideM1 from "@/assets/images/slide-m1.jpg";
import SlideM2 from "@/assets/images/slide-m2.jpg";
import CounterUp from "@/components/elements/CounterUp";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Image from 'next/image';
import Link from 'next/link';

export default function SliderSection() {
    const swiperRefProject = useRef<SwiperType | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // Navigation handlers for slider
    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };

    return (
        <>
            {/* Header End */}
            <section className="slider-section position-relative">
                <Image
                    src={SlideSh1}
                    className="abs-img top-0"
                    alt='Image'
                    width={235}
                    height={231}
                />
                <Image
                    src={TranckV}
                    width={498}
                    height={343}
                    alt="Truck delivery illustration"
                    className="anim-img moveXS bottom-0"
                />

                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="hero-content position-relative">
                                <div className="trust-badge">
                                    <Image
                                        className="abs-img"
                                        width={180}
                                        height={180}
                                        src={TextRotate}
                                        alt='Image'
                                    />
                                    <div className="icon rounded-circle">
                                        <Image
                                            src={Boomark}
                                            width={60}
                                            height={60}
                                            alt="Bookmark icon"
                                        />
                                    </div>
                                </div>

                                <FadeInAdvanced
                                    key={`sub-title-${activeSlide}`}
                                    variant="fadeInUp"
                                    delay={200}
                                    triggerOnce={false}
                                >
                                    <p className="sub-title h4">
                                        Logistic Transportation
                                    </p>
                                </FadeInAdvanced>

                                <FadeInAdvanced
                                    key={`main-title-${activeSlide}`}
                                    variant="fadeInUp"
                                    delay={400}
                                    triggerOnce={false}
                                >
                                    <h1 className="text-info fw-bold">
                                        The Bridge to Your Logistics Success
                                    </h1>
                                </FadeInAdvanced>

                                <div className="slide-meta">
                                    <FadeInAdvanced
                                        key={`description-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={600}
                                        triggerOnce={false}
                                    >
                                        <p className="h6 text-info">
                                            Optimizing processes and leveraging
                                            technology, businesses can gain a
                                            competitive.
                                        </p>
                                    </FadeInAdvanced>

                                    <FadeInAdvanced
                                        key={`cta-button-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={800}
                                        triggerOnce={false}
                                    >
                                        <Link
                                            href="/contact"
                                            className="btn btn-primary"
                                        >
                                            {`Let's`} get Started
                                            <i
                                                className="fa fa-arrow-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="hero-slider-wrap overflow-hidden position-relative">
                                <div className="hero-slider swiper">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRefProject.current = swiper;
                                        }}
                                        modules={[Navigation, Autoplay, EffectCreative]}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false
                                        }}
                                        loop={true}
                                        spaceBetween={0}
                                        effect="creative"
                                        speed={1500}
                                        creativeEffect={{
                                            prev: {
                                                scale: 1,
                                                opacity: 0,
                                                translate: [0, 0, 0]
                                            },
                                            next: {
                                                scale: 1.2,
                                                opacity: 0,
                                                translate: [0, 0, 0]
                                            }
                                        }}
                                        onSlideChange={(swiper) => {
                                            setActiveSlide(swiper.realIndex);
                                        }}
                                        className="swiper-wrapper"
                                    >
                                        <SwiperSlide>
                                            <div className="slide-img">
                                                <Image
                                                    src={SlideM1}
                                                    width={975}
                                                    height={1000}
                                                    loading="eager"
                                                    alt="Logistics warehouse management"
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide-img">
                                                <Image
                                                    src={SlideM2}
                                                    width={975}
                                                    height={1000}
                                                    loading="eager"
                                                    alt="Global shipping transport"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="stat-card bg-white d-none d-sm-flex align-items-center">
                                    <div className="customer-imgs d-flex">
                                        <Image src={Cl1} width={50} height={50} alt="Client logo" />
                                        <Image src={Cl2} width={50} height={50} alt="Client logo" />
                                        <Image src={Cl3} width={50} height={50} alt="Client logo" />
                                        <Image src={Cl4} width={50} height={50} alt="Client logo" />
                                    </div>
                                    <div className="stat-info">
                                        <span className="display-5 purecounter text-primary">
                                            <CounterUp ending={280} duration={2000} /> M
                                        </span>
                                        <h2 className="h5">Orders Complete</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="custom-nav">
                                <div onClick={projectNextSlide} className="swiper-button-next"></div>
                                <div onClick={projectPrevSlide} className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Slider Section End */}
        </>
    );
}