"use client"; 
import {
    blogStandardData,
    latestBlogData,
    blogCategories,
    blogTags,
} from "@/data/blogData";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogStandardSec() {

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    // Calculate paginated product
    const totalPages = Math.ceil(blogStandardData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogStandardData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    }; 
    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-standard-sec sec-padding">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8 pe-lg-4">
                            <div className="blog-wrap">
                                {currentProducts.map((blog) => (
                                    <article
                                        className="blog-standard round"
                                        key={blog.id}
                                    >
                                        <div className="blog-thumb zoom-th round">
                                            <Link href="/single-post">
                                                <Image
                                                    src={blog?.image}
                                                    style={{ width: 'auto', height: "auto" }}
                                                    alt="Blog"
                                                    className="img-fluid round"
                                                />
                                            </Link>
                                            <div className="blog-meta">
                                                <span>
                                                    <i className="fa-regular fa-user"></i>
                                                    <Link href="#">
                                                        By {blog.author}
                                                    </Link>
                                                </span>
                                                <span>
                                                    <i className="fa fa-calendar"></i>
                                                    {blog.date}
                                                </span>
                                                <span>
                                                    <i className="fa fa-tags"></i>
                                                    <Link href="#">
                                                        {blog.category}
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="display-3">
                                                <Link href="/single-post">
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <p>{blog.excerpt}</p>
                                            <Link
                                                href="/single-post"
                                                className="btn btn-primary"
                                            >
                                                Free Quote
                                                <i className="fa fa-arrow-right"></i>
                                                <span></span>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

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
                        {/* Article End */}

                        <div className="col-lg-4">
                            <aside className="sidebar">
                                <div className="widget search-widget">
                                    <form className="position-relative">
                                        <input
                                            type="search"
                                            placeholder="Enter keyword"
                                        />
                                        <button className="btn btn-primary position-absolute">
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
                                            {blogCategories.map((category, index) => (
                                                <li key={index}>
                                                    <Link href="#">
                                                        {category.name}
                                                    </Link>
                                                    ({category.count})
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">
                                        Latest From Blog
                                    </h3>
                                    <div className="widget-inner">
                                        {latestBlogData.map((blog) => (
                                            <div
                                                className="ls-entry d-flex"
                                                key={blog.id}
                                            >
                                                <Image
                                                    style={{width:'auto', height:"auto"}}
                                                    src={blog.image}
                                                    alt="Course"
                                                    className="img-fluid rounded-2"
                                                />
                                                <div className="ls-info ms-3">
                                                    <span className="entry-meta">
                                                        <i className="fa-regular fa-calendar-days"></i>
                                                        {blog.date}
                                                    </span>
                                                    <h6>
                                                        <Link href="/single-course">
                                                            {blog.title}
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Widget End */}

                                <div className="widget tagcloud">
                                    <h3 className="widget-title">
                                        Popular Keyword
                                    </h3>
                                    <div className="widget-inner">
                                        {blogTags.map((tag, index) => (
                                            <Link href="#" key={index}>
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Widget End */}
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
}