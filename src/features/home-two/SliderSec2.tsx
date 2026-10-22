"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import SlideBg from "@/assets/images/slide-bg.png";
import SlideAnim from "@/assets/images/slide-anim.png"; 
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Link from 'next/link';
import Image from 'next/image';

export default function SliderSec2() {
    const swiperRefProject = useRef<SwiperType | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };

    return (
        <>
            <section className="slider-sec2 position-relative">
                <Link href="/quote" className="slide-cta">
                    Discover Containers
                </Link>
                <div className="hero-slider2 swiper">
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
                                scale: 1.1,
                                opacity: 0,
                                translate: [0, 0, 0]
                            },
                            next: {
                                scale: 1.3,
                                opacity: 0,
                                translate: [0, 0, 0]
                            }
                        }}
                        onSlideChange={(swiper) => {
                            setActiveSlide(swiper.realIndex);
                        }}
                        className="swiper-wrapper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-item position-relative">
                                    <div className="item-bg bg1" ></div>
                                    <div className="slide-content">
                                        <div className="parallax-txt">
                                            <Image src={SlideBg} width={950} height={161} loading="eager" className="img-fluid" alt='Image' />
                                        </div>

                                        <FadeInAdvanced
                                            key={`slide-0-subtitle-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={200}
                                            triggerOnce={false}
                                        >
                                            <span className="sub-title h5">
                                                Impact of Movement
                                            </span>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-title-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={400}
                                            triggerOnce={false}
                                        >
                                            <h1 className="display-1 fw-bold">
                                                International expert transport services.
                                            </h1>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-desc-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={600}
                                            triggerOnce={false}
                                        >
                                            <p>
                                                End-to-end supply chain support ensuring
                                                smooth operations, faster turnaround,
                                                and complete peace of mind for every
                                                shipment.
                                            </p>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-btn-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={800}
                                            triggerOnce={false}
                                        >
                                            <div className="d-sm-flex slide-cta gap-4">
                                                <Link
                                                    href="/quote"
                                                    className="btn btn-hover btn-primary"
                                                >
                                                    Get a Quote
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                                <Link
                                                    href="/tracking"
                                                    className="btn btn-outline"
                                                >
                                                    Track Shipment
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                            </div>
                                        </FadeInAdvanced>
                                    </div>

                                    <FadeInAdvanced
                                        key={`slide-0-img-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={1000}
                                        triggerOnce={false}
                                    >
                                        <Image src={SlideAnim}
                                            width={184}
                                            height={259}
                                            alt='Image'
                                            className="abs-img start-0 bottom-0 d-none d-sm-block"
                                        />
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-item position-relative">
                                    <div
                                        className="item-bg bg2" ></div>
                                    <div className="slide-content">
                                        <div className="parallax-txt">
                                            <Image src={SlideBg} width={950} height={161} loading="eager" alt='Image' className="img-fluid" />
                                        </div>

                                        <FadeInAdvanced
                                            key={`slide-1-subtitle-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={200}
                                            triggerOnce={false}
                                        >
                                            <span className="sub-title h5">
                                                Available on Request
                                            </span>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-1-title-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={400}
                                            triggerOnce={false}
                                        >
                                            <h1 className="display-1">
                                                Flexible International Logistics Solution.
                                            </h1>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-1-desc-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={600}
                                            triggerOnce={false}
                                        >
                                            <p>
                                                Professional transport services designed
                                                to handle your cargo with sustainable
                                                precision, security, and
                                                industry-trusted efficiency.
                                            </p>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-1-btn-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={800}
                                            triggerOnce={false}
                                        >
                                            <div className="d-sm-flex slide-cta gap-4">
                                                <Link
                                                    href="/quote"
                                                    className="btn btn-hover btn-primary"
                                                >
                                                    Get a Quote
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                                <Link
                                                    href="/tracking"
                                                    className="btn btn-outline"
                                                >
                                                    Track Shipment
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                            </div>
                                        </FadeInAdvanced>
                                    </div>

                                    <FadeInAdvanced
                                        key={`slide-1-img-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={1000}
                                        triggerOnce={false}
                                    >
                                        <Image
                                            src={SlideAnim}
                                            width={184}
                                            height={259}
                                            alt='Image'
                                            className="abs-img start-0 bottom-0 d-none d-sm-block"
                                        />
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="custom-nav">
                    <div onClick={projectNextSlide} className="swiper-button-next"></div>
                    <div onClick={projectPrevSlide} className="swiper-button-prev"></div>
                </div>
            </section>
        </>
    );
}