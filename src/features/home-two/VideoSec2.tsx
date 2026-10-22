"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandsData } from "@/data/brandsData";
import ServBg2 from "@/assets/images/serv-bg2.jpg";
import VideoBg from "@/assets/images/video-bg.jpg";
import CounterUp from "@/components/elements/CounterUp";
import TextAnimation from "@/components/elements/TextAnimation";
import JarallaxSection from "@/components/elements/JarallaxSection";
import YoutubeFrem from "@/components/elements/YoutubeFrem";
import Link from "next/link";
import Image from "next/image";

export default function VideoSec2() {
    return (
        <>
            {/* Video Section Start */}
            <JarallaxSection className="video-sec2 sec-padding jarallax" imgSrc={ServBg2.src} overlayOpacity={.9} speed={.2} >
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-4">
                            <span className="sub-title2 fadeInUp">
                                Our journey so far
                            </span>
                        </div>
                        <div className="col-lg-8">
                            <h2 className="sec-title text-info">
                                <TextAnimation animationStyle="style1">
                                    Smarter logistics and seamless solutions for
                                    modern supply chains.
                                </TextAnimation>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container ct-container">
                    <JarallaxSection as='div' className="video-box jarallax position-relative text-center" imgSrc={VideoBg.src} overlayOpacity={.5} speed={.2} >
                        <YoutubeFrem className="play-btn bg-info rounded-circle text-info icon" video="rbFoRH2deeY">
                            <span>
                                <i className="fa fa-play"></i>
                            </span>
                        </YoutubeFrem>
                    </JarallaxSection>
                </div>

                <div className="container ct-container brands-wrap2">
                    <h3 className="display-3 text-info">
                        More Than
                        <span className="text-primary"> <CounterUp ending={500} /> K </span>
                        Brand with Work Here.
                    </h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brands-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    speed={600}
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        768: {
                                            slidesPerView: 4
                                        },
                                        992: {
                                            slidesPerView: 6
                                        }
                                    }}
                                >
                                    {brandsData.map((brand) => (
                                        <SwiperSlide key={brand.id}>
                                            <Link href={brand.link}>
                                                <Image src={brand.image} width={90} height={80} alt={brand.alt} />
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Video Section End */}
        </>
    );
}
