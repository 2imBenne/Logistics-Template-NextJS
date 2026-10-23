"use client";

import { blogCardData } from "@/data/blogData"; 
import Image from "next/image";
import Link from "next/link";

export default function BlogSec() {
    const featuredTeam = blogCardData.slice(0, 3); 
    // console.log(featuredTeam, "ggggggg")
    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-sec sec-padding bg-shade">
                <div className="container">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="sec-intro mb-0">
                            <span className="sub-title2 fadeInUp single">
                                Blog & Tin tức
                            </span>
                            <h2 className="sec-title">
                                Góc nhìn từ chúng tôi
                            </h2>
                        </div>
                        <Link href="/blog" className="btn btn-primary">
                            Xem tất cả <i className="fa fa-arrow-right"></i>
                            <span></span>
                        </Link>
                    </div>
                    <div className="row justify-content-md-center gy-4 mt-5">


                        {featuredTeam.map((Team, index) => (
                            <div key={index} className="col-xl-4 col-md-6">
                                <article className="blog-entry2 bg-info round">
                                    <div className="blog-thumb">
                                        <Link href="/single-post">
                                            <Image
                                                src={Team?.image}
                                                className="img-fluid"
                                                width={343}
                                                height={209}
                                                alt={Team?.title || "Image"}
                                                style={{ width: "100%", height: "210px", objectFit: "cover" }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-inner">
                                        <div className="blog-meta d-flex gap-4">
                                            <span>
                                                <Link href="#">
                                                    <i className="fa-regular fa-user"></i>
                                                    {Team.author}
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href="#">
                                                    <i className="fa-regular fa-calendar"></i>
                                                    {Team.date}
                                                </Link>
                                            </span>
                                        </div>
                                        <h3 className="display-4">
                                            <Link href="/single-post">{Team.title}</Link>
                                        </h3>
                                        <div className="blog-footer border-top">
                                            <Link
                                                href="/single-post"
                                                className="link-btn"
                                            >
                                                Tìm hiểu thêm
                                                <i className="fa-solid fa-circle-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>


                        )
                        )}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
}
