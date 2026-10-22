"use client";


import { useState } from "react";
import { shopData } from "@/data/shopData";
import ShS1 from "@/assets/images/sh-s1.jpg";
import ShS2 from "@/assets/images/sh-s2.jpg";
import ShS3 from "@/assets/images/sh-s3.jpg";
import CustomFormSelect from "@/components/elements/CustomFormSelect";
import Link from "next/link";
import Image from "next/image";

const resultOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' }
];

const sortOptions = [
    { value: 'Sort by Latest', label: 'Sort by Latest' },
    { value: 'Sort by Popular', label: 'Sort by Popular' },
    { value: 'Sort by Rated', label: 'Sort by Rated' },
    { value: 'Sort by low Price', label: 'Sort by low Price' },
    { value: 'Sort by high Price', label: 'Sort by high Price' }
];

export default function ShopSection() {
    const [selectedResult, setSelectedResult] = useState<string>("");
    const [selectedSort, setSelectedSort] = useState<string>("");

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
    // Calculate paginated product
    const totalPages = Math.ceil(shopData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = shopData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };


    return (
        <>
            {/* Promo Section End */}
            <section className="shop-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pe-4">
                            <div className="shop-wrapper">
                                <div className="shop-filters d-sm-flex justify-content-between">
                                    <div className="result d-sm-flex align-items-center">
                                        <p className="m-0">Showing Result:</p>
                                        <CustomFormSelect optionArray={resultOptions} value={selectedResult} onChange={(v) => setSelectedResult(v)} />
                                    </div>
                                    <div className="filter d-flex">
                                        <CustomFormSelect optionArray={sortOptions} value={selectedSort} onChange={(v) => setSelectedSort(v)} />
                                        <div className="d-none d-sm-flex ms-3">
                                            <Link
                                                href="#"
                                                className="icon border rounded-1 bg-primary me-3"
                                            >
                                                <i className="fa-solid fa-border-all"></i>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="icon border rounded-1 bg-shade"
                                            >
                                                <i className="fa-solid fa-bars"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Shop Header End */}
                                <div className="row products mt-5">
                                    {currentProducts.map((item) => (
                                        <div
                                            className="col-xl-4 col-md-6 col-sm-6"
                                            key={item.id}
                                        >
                                            <div className="product-entry shadow-sm">
                                                <div className="product-thumb position-relative swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden">
                                                    {item.badge && (
                                                        <div className="badge text-uppercase">
                                                            {item.badge}
                                                        </div>
                                                    )}
                                                    <Link href="/single-product">
                                                        <Image
                                                            className="img-fluid"
                                                            src={item.image}
                                                            width={277}
                                                            height={277}
                                                            alt={item.title}
                                                        />
                                                    </Link>
                                                    <div className="product-cta">
                                                        <Link
                                                            href="#"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to Wishlist"
                                                        >
                                                            <i className="fa-regular fa-heart"></i>
                                                        </Link>
                                                        <Link
                                                            href="#"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to Compare"
                                                        >
                                                            <i className="fa-regular fa-eye"></i>
                                                        </Link>
                                                        <Link
                                                            href="#"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa-solid fa-basket-shopping"></i>
                                                        </Link>
                                                    </div>
                                                    <span
                                                        className="swiper-notification"
                                                        aria-live="assertive"
                                                        aria-atomic="true"
                                                    ></span>
                                                </div>
                                                <div className="product-txt">
                                                    <h3 className="text-nowrap">
                                                        <Link href="/single-product">
                                                            {item.title}
                                                        </Link>
                                                    </h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="price">
                                                            ${item.price.toFixed(2)}{" "}
                                                            <del>
                                                                ${item.oldPrice.toFixed(2)}
                                                            </del>
                                                        </div>
                                                        <div className="ratings">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa-solid fa-star-half-stroke"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12">
                                        <div className="pager text-center mt-4 ">

                                            <Link href="#" className="next-btn" onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}>
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                            {Array.from({ length: totalPages }).map((_, index) => (
                                                <Link key={index} href="#" className={` ${currentPage === index + 1 ? "current" : ""}`} onClick={() => handlePageChange(index + 1)}>
                                                    {index + 1}
                                                </Link>
                                            ))}
                                            <Link href="#" className="prev-btn" onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}>
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <aside className="sidebar product-sidebar">
                                <div className="widget search-widget">
                                    <form className="position-relative">
                                        <input
                                            type="search"
                                            placeholder="Enter keyword"
                                        />
                                        <button className="btn btn-dark position-absolute">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="widget category-widget">
                                    <h3 className="widget-title">
                                        Popular Categories
                                    </h3>
                                    <div className="widget-inner">
                                        <ul>
                                            <li>
                                                <Link href="#">Air Freight</Link>
                                                (18)
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Road Transport
                                                </Link>
                                                (2)
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Rail Transport
                                                </Link>
                                                (12)
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Cargo Services
                                                </Link>
                                                (14)
                                            </li>
                                            <li>
                                                <Link href="#">Warehouse</Link>
                                                (19)
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Ocean Freight
                                                </Link>
                                                (18)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Popular Products
                                    </h3>
                                    <div className="widget-inner">
                                        <div className="ls-entry d-flex">
                                            <Image
                                                src={ShS1}
                                                width={80}
                                                height={107}
                                                alt="shop"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <div className="ratings">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <h6>
                                                    <Link href="/single-product">
                                                        Tshirt for young
                                                    </Link>
                                                </h6>
                                                <span>$99.00</span>
                                            </div>
                                        </div>
                                        {/* Recent Product End */}
                                        <div className="ls-entry d-flex">
                                            <Image

                                                src={ShS2}
                                                width={80}
                                                height={107}
                                                alt="shop"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <div className="ratings">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <h6>
                                                    <Link href="/single-product">
                                                        Jute Bag for style
                                                    </Link>
                                                </h6>
                                                <span>$99.00</span>
                                            </div>
                                        </div>
                                        {/* Recent Product End */}
                                        <div className="ls-entry d-flex">
                                            <Image

                                                src={ShS3}
                                                width={80}
                                                height={107}
                                                alt="shop"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <div className="ratings">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <h6>
                                                    <Link href="/single-product">
                                                        Winter Jacket for style
                                                    </Link>
                                                </h6>
                                                <span>$99.00</span>
                                            </div>
                                        </div>
                                        {/* Recent Product End */}
                                    </div>
                                </div>
                                {/* Widget End */}
                            </aside>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Start */}
        </>
    );
}
