"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import SlideBg from "@/assets/images/slide-bg.png";
import SlideAnim from "@/assets/images/slide-anim.png"; 
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import Banner1 from "@/assets/images/banner-pha-bien.avif";
import Banner2 from "@/assets/images/banner-dau-keo.avif";
import Banner3 from "@/assets/images/banner-xe-tai.avif";
import Banner4 from "@/assets/images/banner-xa-lan.avif";
import Banner5 from "@/assets/images/banner-hang-khong.avif";

interface SlideData {
    id: number;
    bg: StaticImageData;
    subtitle: string;
    title: string;
    description: string;
    primaryBtn: { text: string; href: string };
    secondaryBtn: { text: string; href: string };
}

const slidesData: SlideData[] = [
    {
        id: 1,
        bg: Banner1,
        subtitle: "Chành Xe Con Rùa Biển",
        title: "Vận Chuyển Hàng Hóa Hai Chiều Đến Phú Quốc",
        description: "Dịch vụ vận chuyển hàng hóa chuyên tuyến Sài Gòn - Miền Tây - Phú Quốc uy tín, an toàn, hỗ trợ giao nhận tận nơi với tiến độ nhanh chóng nhất.",
        primaryBtn: { text: "Nhận Báo Giá", href: "/quote" },
        secondaryBtn: { text: "Tra Cứu Vận Đơn", href: "/tracking" },
    },
    {
        id: 2,
        bg: Banner2,
        subtitle: "Đội Xe Đầu Kéo Hùng Hậu",
        title: "Cho Thuê Xe Đầu Kéo & Vận Chuyển Container",
        description: "Hệ thống đầu kéo và rơ-moóc chuyên dụng hiện đại, phục vụ kéo container hàng nặng, hàng dự án siêu trường siêu trọng trên toàn quốc.",
        primaryBtn: { text: "Nhận Báo Giá", href: "/quote" },
        secondaryBtn: { text: "Tra Cứu Vận Đơn", href: "/tracking" },
    },
    {
        id: 3,
        bg: Banner3,
        subtitle: "Đa Dạng Tải Trọng",
        title: "Dịch Vụ Cho Thuê Xe Tải Chở Hàng Uy Tín",
        description: "Đội ngũ xe tải đời mới từ 1.5 tấn đến 25 tấn, nhận ghép hàng lẻ, bao xe nguyên chuyến, cam kết giao hàng an toàn, đúng hẹn.",
        primaryBtn: { text: "Nhận Báo Giá", href: "/quote" },
        secondaryBtn: { text: "Tra Cứu Vận Đơn", href: "/tracking" },
    },
    {
        id: 4,
        bg: Banner4,
        subtitle: "Vận Tải Đường Thủy",
        title: "Vận Tải Hàng Hóa Bằng Xà Lan Chuyên Dụng",
        description: "Chuyên chở hàng công trình, sắt thép, xi măng, máy móc cơ giới khối lượng lớn ra các đảo với lịch trình cố định và an toàn tuyệt đối.",
        primaryBtn: { text: "Nhận Báo Giá", href: "/quote" },
        secondaryBtn: { text: "Tra Cứu Vận Đơn", href: "/tracking" },
    },
    {
        id: 5,
        bg: Banner5,
        subtitle: "Hỏa Tốc Hàng Không",
        title: "Dịch Vụ Chuyển Phát Nhanh Đường Hàng Không",
        description: "Kết nối mạng lưới đường bay nội địa 24/7, chuyển phát nhanh thư từ, bưu phẩm, hàng tươi sống đến các tỉnh thành trong ngày.",
        primaryBtn: { text: "Nhận Báo Giá", href: "/quote" },
        secondaryBtn: { text: "Tra Cứu Vận Đơn", href: "/tracking" },
    },
];

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
                <div className="hero-slider2 swiper">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRefProject.current = swiper;
                        }}
                        modules={[Navigation, Autoplay, EffectCreative]}
                        navigation={{
                            prevEl: '.custom-nav-prev',
                            nextEl: '.custom-nav-next'
                        }}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
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
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                <div className="swiper-slide">
                                    <div className="slide-item position-relative">
                                        <div
                                            className="item-bg"
                                            style={{ backgroundImage: `url(${slide.bg.src})` }}
                                        ></div>
                                        <div className="slide-content">
                                            <div className="parallax-txt">
                                                <Image src={SlideBg} width={950} height={161} loading="eager" className="img-fluid" alt='Image' />
                                            </div>

                                            <FadeInAdvanced
                                                key={`slide-${index}-subtitle-${activeSlide}`}
                                                variant="fadeInUp"
                                                delay={200}
                                                triggerOnce={false}
                                            >
                                                <span className="sub-title h5">
                                                    {slide.subtitle}
                                                </span>
                                            </FadeInAdvanced>

                                            <FadeInAdvanced
                                                key={`slide-${index}-title-${activeSlide}`}
                                                variant="fadeInUp"
                                                delay={400}
                                                triggerOnce={false}
                                            >
                                                <h1 className="display-1 fw-bold">
                                                    {slide.title}
                                                </h1>
                                            </FadeInAdvanced>

                                            <FadeInAdvanced
                                                key={`slide-${index}-desc-${activeSlide}`}
                                                variant="fadeInUp"
                                                delay={600}
                                                triggerOnce={false}
                                            >
                                                <p>
                                                    {slide.description}
                                                </p>
                                            </FadeInAdvanced>

                                            <FadeInAdvanced
                                                key={`slide-${index}-btn-${activeSlide}`}
                                                variant="fadeInUp"
                                                delay={800}
                                                triggerOnce={false}
                                            >
                                                <div className="d-sm-flex slide-cta gap-4">
                                                    <Link
                                                        href={slide.primaryBtn.href}
                                                        className="btn btn-hover btn-primary"
                                                    >
                                                        {slide.primaryBtn.text}
                                                        <i className="fa fa-arrow-right"></i>
                                                        <span></span>
                                                    </Link>
                                                    <Link
                                                        href={slide.secondaryBtn.href}
                                                        className="btn btn-outline"
                                                    >
                                                        {slide.secondaryBtn.text}
                                                        <i className="fa fa-arrow-right"></i>
                                                        <span></span>
                                                    </Link>
                                                </div>
                                            </FadeInAdvanced>
                                        </div>

                                        <FadeInAdvanced
                                            key={`slide-${index}-img-${activeSlide}`}
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
                        ))}
                    </Swiper>
                </div>

                <div className="custom-nav">
                    <button
                        type="button"
                        onClick={projectPrevSlide}
                        className="custom-nav-btn custom-nav-prev"
                        aria-label="Previous Slide"
                    >
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <button
                        type="button"
                        onClick={projectNextSlide}
                        className="custom-nav-btn custom-nav-next"
                        aria-label="Next Slide"
                    >
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
            </section>
        </>
    );
}