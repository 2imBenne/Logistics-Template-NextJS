"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandsData } from "@/data/brandsData";
import BrandBg from "@/assets/images/brand-bg.jpg";
import JarallaxSection from "@/components/elements/JarallaxSection";
import Link from "next/link";
import Image from "next/image";

export default function BrandsSec() {
    return (
        <>
            {/* Brands Section Start */}
            <JarallaxSection
                imgSrc={BrandBg.src}
                speed={0.4}
                className="brands-sec bg-cover"
            >
                <div className="container ct-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brands-carousel">
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
            </JarallaxSection>
            {/* Brands Section End */}
        </>
    );
}