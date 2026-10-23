"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import {
    projectNtthoCategories,
    projectNtthoData,
    projectStats,
    ProjectServicePost,
} from "@/data/projectNtthoData";

export default function ProjectNtthoSec() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [activeModalItem, setActiveModalItem] = useState<ProjectServicePost | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const ITEMS_PER_PAGE = 6;

    const filteredProjects =
        selectedCategory === "all"
            ? projectNtthoData
            : projectNtthoData.filter((item) => item.categoryGroup === selectedCategory);

    // Tính toán số trang chuẩn xác vừa khớp với số lượng dự án thực tế
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategoryChange = (key: string) => {
        setSelectedCategory(key);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            const anchorEl = document.getElementById("project-grid-anchor");
            if (anchorEl) {
                anchorEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <section className="project-nttho-sec sec-padding position-relative bg-shade overflow-hidden">
            <div className="container">
                {/* Section Introduction with FadeInUp */}
                <FadeInAdvanced variant="fadeInUp" duration={800} threshold={0.2}>
                    <div className="sec-intro full mx-auto text-center mb-5">
                        <span className="sub-title fadeInUp text-danger fw-bold d-inline-flex align-items-center gap-2">
                            <i className="fa-solid fa-ship"></i>
                            DỰ ÁN ĐÃ VẬN CHUYỂN - CON RÙA BIỂN (SERVICE TOPIC 14)
                        </span>
                        <h2 className="sec-title display-5 fw-bold mt-2">
                            Hồ Sơ Năng Lực Vận Chuyển Hàng Hóa Thực Tế
                        </h2>
                    </div>
                </FadeInAdvanced>

                {/* Filter Tabs with FadeInUp */}
                <FadeInAdvanced variant="fadeInUp" delay={150} duration={800} threshold={0.2}>
                    <div className="filter-nav-wrap d-flex flex-wrap justify-content-center gap-2 mb-5">
                        {projectNtthoCategories.map((cat) => (
                            <button
                                key={cat.key}
                                type="button"
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`btn px-4 py-2 rounded-pill fw-semibold transition-all ${
                                    selectedCategory === cat.key
                                        ? "btn-danger text-white shadow"
                                        : "btn-outline-secondary bg-white text-dark"
                                }`}
                                style={{
                                    borderColor: selectedCategory === cat.key ? "#DC2626" : "#e2e8f0",
                                    backgroundColor: selectedCategory === cat.key ? "#DC2626" : "#ffffff",
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </FadeInAdvanced>

                <div id="project-grid-anchor" style={{ scrollMarginTop: "100px" }}></div>

                {/* Projects Grid with Stagger Delay Scroll Animation */}
                <div className="row g-4">
                    {currentProjects.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={`${item.id}-${index}`}>
                            <FadeInAdvanced
                                variant="fadeInUp"
                                delay={((index % 3) + 1) * 150}
                                duration={900}
                                threshold={0.1}
                                className="h-100"
                            >
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-shadow transition-all d-flex flex-column">
                                    {/* Image Box */}
                                    <div className="position-relative overflow-hidden" style={{ height: "240px" }}>
                                        <Image
                                            src={item.fallbackImage}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-fit-cover transition-transform duration-500 hover-zoom"
                                            style={{ transition: "transform 0.4s ease" }}
                                        />
                                        <span
                                            className="position-absolute top-0 start-0 m-3 badge px-3 py-2 rounded-pill fw-medium text-white shadow-sm"
                                            style={{ backgroundColor: "rgba(220, 38, 38, 0.92)", backdropFilter: "blur(4px)" }}
                                        >
                                            {item.categoryGroupLabel}
                                        </span>
                                    </div>

                                    {/* Body Content */}
                                    <div className="card-body p-4 d-flex flex-column flex-grow-1">
                                        <div className="d-flex align-items-center gap-2 text-danger small fw-semibold mb-2">
                                            <i className="fa-solid fa-route"></i>
                                            <span className="text-truncate">{item.route}</span>
                                        </div>

                                        <h3 className="card-title h5 fw-bold text-dark mb-3 line-clamp-2" style={{ lineHeight: "1.4" }}>
                                            {item.name}
                                        </h3>

                                        <p className="card-text text-muted small mb-4 flex-grow-1 line-clamp-3">
                                            {item.description}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
                                            <button
                                                type="button"
                                                onClick={() => setActiveModalItem(item)}
                                                className="btn btn-sm btn-outline-danger rounded-pill px-4 fw-semibold"
                                            >
                                                Xem chi tiết <i className="fa-solid fa-arrow-right ms-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    ))}
                </div>

                {/* Template Pagination Bar */}
                <FadeInAdvanced variant="fadeInUp" delay={200} duration={800} threshold={0.1}>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="pager text-center d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="btn d-inline-flex align-items-center justify-content-center border-0 shadow-sm transition-all"
                                    aria-label="Trang trước"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "50px",
                                        backgroundColor: currentPage === 1 ? "#e2e8f0" : "#ffffff",
                                        color: currentPage === 1 ? "#94a3b8" : "#0f172a",
                                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                {Array.from({ length: totalPages }).map((_, index) => {
                                    const pageNum = index + 1;
                                    const isActive = currentPage === pageNum;
                                    return (
                                        <button
                                            key={pageNum}
                                            type="button"
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`btn d-inline-flex align-items-center justify-content-center border-0 fw-bold shadow-sm transition-all ${
                                                isActive ? "current text-white" : "bg-white text-dark"
                                            }`}
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50px",
                                                backgroundColor: isActive ? "#DC2626" : "#ffffff",
                                                color: isActive ? "#ffffff" : "#1e293b",
                                                fontSize: "16px",
                                            }}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    type="button"
                                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="btn d-inline-flex align-items-center justify-content-center border-0 shadow-sm transition-all"
                                    aria-label="Trang tiếp theo"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "50px",
                                        backgroundColor: currentPage === totalPages ? "#e2e8f0" : "#ffffff",
                                        color: currentPage === totalPages ? "#94a3b8" : "#0f172a",
                                        cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                            <p className="text-center text-muted small mt-3 mb-0">
                                Trang {currentPage} / {totalPages} ({filteredProjects.length} dự án)
                            </p>
                        </div>
                    </div>
                </FadeInAdvanced>

                {/* Stats Impact Section with ZoomIn */}
                <div className="row g-4 mt-5 pt-3">
                    {projectStats.map((st, idx) => (
                        <div className="col-lg-3 col-6" key={idx}>
                            <FadeInAdvanced
                                variant="zoomIn"
                                delay={idx * 150}
                                duration={700}
                                threshold={0.2}
                                className="h-100"
                            >
                                <div className="p-4 rounded-4 text-center bg-white shadow-sm border border-light h-100">
                                    <div className="display-5 fw-bolder text-danger mb-1" style={{ color: "#DC2626" }}>
                                        {st.number}
                                    </div>
                                    <div className="text-dark fw-semibold small">{st.label}</div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Box with FadeInUp */}
                <FadeInAdvanced variant="fadeInUp" delay={200} duration={900} threshold={0.2}>
                    <div
                        className="p-5 rounded-4 mt-5 text-white position-relative overflow-hidden shadow-lg text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
                        style={{
                            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #b91c1c 100%)",
                        }}
                    >
                        <div>
                            <span className="badge bg-danger text-white px-3 py-1 rounded-pill mb-2">Tư Vấn Miễn Phí 24/7</span>
                            <h3 className="h2 fw-bold text-white mb-2">Bạn Cần Vận Chuyển Hàng Đi Phú Quốc Hoặc Tuyến Đảo?</h3>
                            <p className="text-light mb-0 small opacity-75">
                                Con Rùa Biển sẵn sàng khảo sát, đóng kiện gỗ, chằng buộc và điều động phương tiện phù hợp với mức giá ưu đãi nhất.
                            </p>
                        </div>
                        <div className="d-flex flex-wrap gap-3 flex-shrink-0">
                            <Link href="/quote" className="btn btn-danger btn-lg px-4 rounded-pill fw-bold shadow">
                                Nhận Báo Giá Ngay
                            </Link>
                            <Link href="/contact" className="btn btn-outline-light btn-lg px-4 rounded-pill fw-semibold">
                                Hotline: 0945 000 006
                            </Link>
                        </div>
                    </div>
                </FadeInAdvanced>
            </div>

            {/* Quick Detail Modal */}
            {activeModalItem && (
                <div
                    className="modal fade show d-block"
                    style={{ backgroundColor: "rgba(15, 23, 42, 0.75)", zIndex: 1050 }}
                    tabIndex={-1}
                    role="dialog"
                    onClick={() => setActiveModalItem(null)}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-lg"
                        role="document"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
                            <div className="position-relative" style={{ height: "300px" }}>
                                <Image
                                    src={activeModalItem.fallbackImage}
                                    alt={activeModalItem.name}
                                    fill
                                    className="object-fit-cover"
                                />
                                <button
                                    type="button"
                                    className="btn-close btn-close-white position-absolute top-0 end-0 m-3 shadow"
                                    onClick={() => setActiveModalItem(null)}
                                    aria-label="Close"
                                ></button>
                                <span className="position-absolute bottom-0 start-0 m-3 badge bg-danger px-3 py-2 rounded-pill">
                                    {activeModalItem.categoryGroupLabel}
                                </span>
                            </div>
                            <div className="modal-body p-4 p-md-5">
                                <h3 className="h4 fw-bold text-dark mb-3">{activeModalItem.name}</h3>
                                <p className="text-muted">{activeModalItem.description}</p>
                                
                                <div className="row g-3 my-3">
                                    <div className="col-sm-6">
                                        <div className="p-3 bg-light rounded-3">
                                            <span className="text-muted small d-block">Tuyến vận chuyển:</span>
                                            <strong className="text-dark">{activeModalItem.route}</strong>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-3 bg-light rounded-3">
                                            <span className="text-muted small d-block">Đơn vị thực hiện:</span>
                                            <strong className="text-danger">{activeModalItem.author}</strong>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-3 bg-light rounded-3">
                                            <span className="text-muted small d-block">Hệ thống Service Mapping:</span>
                                            <strong className="text-dark">Topic #{activeModalItem.topicId} | Category #{activeModalItem.categoryId}</strong>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-3 bg-light rounded-3">
                                            <span className="text-muted small d-block">Đường dẫn bài viết thực tế:</span>
                                            <code className="text-danger small">{activeModalItem.urlName}</code>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                                    <button
                                        type="button"
                                        className="btn btn-secondary rounded-pill px-4"
                                        onClick={() => setActiveModalItem(null)}
                                    >
                                        Đóng
                                    </button>
                                    <Link href="/quote" className="btn btn-danger rounded-pill px-4 fw-bold">
                                        Yêu Cầu Báo Giá Tuyến Này
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}


