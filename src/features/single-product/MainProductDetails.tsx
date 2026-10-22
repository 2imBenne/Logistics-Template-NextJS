"use client";


import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Shop1 from "@/assets/images/shop1.jpg";
import Shop2 from "@/assets/images/shop2.jpg";
import Shop3 from "@/assets/images/shop3.jpg";
import Shop4 from "@/assets/images/shop4.jpg";
import Shop5 from "@/assets/images/shop5.jpg";
import Shop6 from "@/assets/images/shop6.jpg";
import Jcb from "@/assets/images/jcb.png";
import Stripe from "@/assets/images/stripe.png";
import Mastercard from "@/assets/images/mastercard.png";
import Gpay from "@/assets/images/gpay.png";
import Skrill from "@/assets/images/skrill.png";
import Image from 'next/image';
import Link from 'next/link';
export default function MainProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const images = [Shop1, Shop2, Shop3, Shop4, Shop5, Shop6]; // Assuming these are the imported images
    // Navigation handlers for slider
    const swiperRefProject = useRef<SwiperType | null>(null);
    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };
    return (
        <>
            {/* Tips Section Start */}
            <section className="product-details sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="product-media d-sm-flex align-items-start py-3">
                                <div className="product-media-left position-relative">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            setThumbsSwiper(swiper);
                                            swiperRefProject.current = swiper;
                                        }}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        breakpoints={{
                                            320: {
                                                direction: "horizontal",
                                                slidesPerView: 3
                                            },
                                            576: {
                                                direction: "vertical",
                                                slidesPerView: 4
                                            }
                                        }}
                                        className="product-thumb"
                                    >
                                        <div className="swiper-wrapper">
                                            {images.map((img, index) => (
                                                <SwiperSlide key={index}>
                                                    <Image className="img-fluid" src={img} width={110} height={110} alt="ProductImage" />
                                                </SwiperSlide>
                                            ))}
                                        </div>
                                    </Swiper>
                                    <div className="swiper-button-next" onClick={projectNextSlide}></div>
                                    <div className="swiper-button-prev" onClick={projectPrevSlide}></div>
                                </div>
                                <Swiper
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[Thumbs]}
                                    className="coverItem"
                                >
                                    <div className="swiper-wrapper">
                                        {images.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <Image className="img-fluid" src={img} width={453} height={453} alt="ProductMainImage" />
                                            </SwiperSlide>
                                        ))}
                                        {/* Repeat images to match original count if needed or just use the set. Original had 7 thumb slides (Shop6 repeat?) but 7 main slides (repeated start). I'll just use the array once for now unless specific repetition requested. */}
                                        {/* Actually, user had explicit repeated slides in original. I'll just map the 6 unique images. */}
                                    </div>
                                </Swiper>
                            </div>
                        </div> {/* col end */}
                        <div className="col-xl-6 mt-5 mt-xl-0">
                            <div className="product-info ps-lg-4">
                                <h2 className="display-3">Le Skinny De Jeanne Crop</h2>
                                <div className="d-flex justify-content-between my-3">
                                    <h3 className="product-price display-5"><span className="currency">$</span>329.99</h3>
                                    <div className="reviews">
                                        <div className="d-flex">

                                            <div className="ratings">
                                                <Link href="#"><i className="fa fa-star"></i></Link>
                                                <Link href="#"><i className="fa fa-star"></i></Link>
                                                <Link href="#"><i className="fa fa-star"></i></Link>
                                                <Link href="#"><i className="fa fa-star"></i></Link>
                                                <Link href="#"><i className="fa fa-star"></i></Link>
                                            </div>
                                            <span className="text-body-alt">(0 Reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <p>Over the past decade, e-sports have exploded in popularity, reaching a massive global audience.
                                    Major tournaments are
                                    held in arenas that rival those of traditional sports, attracting thousands of spectators in person
                                    and millions</p>


                                <div className="d-sm-flex my-4 align-items-end cart-number gap-3">
                                    <div className="quantity d-flex align-items-center">
                                        <input
                                            type="button"
                                            value="-"
                                            className="qty_button minus"
                                            onClick={handleDecrease}
                                        />
                                        <input
                                            type="number"
                                            className="input-text qty text"
                                            step="1"
                                            value={quantity}
                                            readOnly
                                            name="quantity"
                                        />
                                        <input
                                            type="button"
                                            value="+"
                                            className="qty_button plus"
                                            onClick={handleIncrease}
                                        />
                                    </div>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                                <div className="product-meta mt-4">
                                    <p className="sku"><strong>SKU:</strong> GJGH578KHL</p>
                                    <p className="sku"><strong>Category:</strong> Sports Fashion</p>
                                    <p className="sku"><strong>Tags:</strong> Jersy, Sports</p>
                                    <p className="sku"><i className="fa-regular fa-clock"></i><strong className="ms-3">Estimate
                                        Delivery:</strong> 21-28 Nov, 2023</p>
                                    <p className="sku"><i className="fa-regular fa-calendar"></i><strong className="ms-3">Delivers
                                        In:</strong> 3-7 Working Days</p>
                                </div>
                                <div className="payment-method d-sm-flex bg-shade p-3 border rounded-2 mt-4">
                                    <span className="display-6">Checkout with :</span>
                                    <div className="pay-options ms-3 d-sm-flex justify-content-between w-100">
                                        <Link href="#"><Image className="img-fluid" alt='shop' width={26} height={20} src={Jcb} /></Link>
                                        <Link href="#"><Image className="img-fluid" alt='shop' width={47} height={20} src={Stripe} /></Link>
                                        <Link href="#"><Image className="img-fluid" alt='shop' width={32} height={20} src={Mastercard} /></Link>
                                        <Link href="#"><Image className="img-fluid" alt='shop' width={23} height={20} src={Gpay} /></Link>
                                        <Link href="#"><Image className="img-fluid" alt='shop' width={57} height={20} src={Skrill} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>{/* col end */}
                    </div>
                </div>
            </section>
            {/* Tips Section End */}
        </>
    );
}