"use client";

import { blogGridData } from "@/data/blogData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    // Map imported images to the data
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated product
    const totalPages = Math.ceil(blogGridData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogGridData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-page sec-padding">
                <div className="container">
                    <div className="row gy-xl-5">
                        {currentProducts.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id || index}>
                                <div className="blog-entry fadeInUp">
                                    <div className="entry-thumb">
                                        <Link href="/single-post">
                                            <Image
                                                src={blog?.image}
                                                style={{ width: 'auto', height: "auto" }}
                                                alt="Blog"
                                            />
                                        </Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>
                                            <Link href="#">
                                                <i className="fa-regular fa-user"></i>
                                                {blog.author}
                                            </Link>
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            {blog.date}
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link href="/single-post">
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <Link href="/single-post" className="link-btn">
                                        Learn more
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12">
                            <div className="pager text-center mt-5">
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
            </section>
            {/* Blog Section End */}
        </>
    );
}