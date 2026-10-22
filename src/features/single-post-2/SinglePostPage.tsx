
import Ls1 from "@/assets/images/ls1.png";
import Ls2 from "@/assets/images/ls2.png";
import Ls3 from "@/assets/images/ls3.png";
import SinglePost from "@/assets/images/single-post.jpg";
import PostSingle from "./PostSingle";
import Image from "next/image";
import Link from "next/link";

export default function SinglePostPage() {
    return (
        <>
            {/* Single Article Section Start */}
            <div className="single-post-page sec-padding">
                <div className="container">
                    <div className="row">
                        <figure className="post-thumb">
                            <Image
                                src={SinglePost}
                                style={{ width: "auto", height: "auto" }}
                                alt="blog"
                                className="img-fluid"
                            />
                        </figure>
                        <div className="col-lg-8">
                            <PostSingle />
                        </div>
                        <div className="col-lg-4 ps-lg-5">
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
                                        Latest From Blog
                                    </h3>
                                    <div className="widget-inner">
                                        <div className="ls-entry d-flex">
                                            <Image
                                                style={{ width: "auto", height: "auto" }}
                                                src={Ls1}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link href="/single-course">
                                                        TranHub Embraces AI for
                                                        Optimized Route
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                        <div className="ls-entry d-flex">
                                            <Image
                                                style={{ width: "auto", height: "auto" }}
                                                src={Ls2}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link href="/single-course">
                                                        How is Adapting to Meet
                                                        Growing Demand
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                        <div className="ls-entry d-flex">
                                            <Image
                                                style={{ width: "auto", height: "auto" }}
                                                src={Ls3}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link href="/single-course">
                                                        TransHub Commitment to
                                                        Eco-Friendly
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                    </div>
                                </div>
                                {/* Widget End */}

                                <div className="widget tagcloud">
                                    <h3 className="widget-title">
                                        Popular Keyword
                                    </h3>
                                    <div className="widget-inner">
                                        <Link href="#">Logistics Services</Link>
                                        <Link href="#">Warehouse</Link>
                                        <Link href="#">air fright</Link>
                                        <Link href="#">Ocean Freight</Link>
                                        <Link href="#">Global</Link>
                                        <Link href="#">community</Link>
                                    </div>
                                </div>
                                {/* Widget End */}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Article Section End */}
        </>
    );
}
