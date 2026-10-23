"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CounterUp from "@/components/elements/CounterUp";
import { motion } from "framer-motion";
import BrandsSec from "@/features/home-one/BrandsSec";

// Logo
import LogoWhite from "@/assets/images/logo-w.svg";

// Images from assets
import AboutHero from "@/assets/images/about-d.jpg";
import SlideM1 from "@/assets/images/slide-m1.jpg";
import SlideM2 from "@/assets/images/slide-m2.jpg";
import ServOcean from "@/assets/images/serv5.jpg";
import ServAir from "@/assets/images/serv6.jpg";
import ServRoad from "@/assets/images/serv7.jpg";
import ServWarehouse from "@/assets/images/serv8.jpg";

// Executive Leadership Portraits
import Tm1 from "@/assets/images/tm1.jpg";
import Tm2 from "@/assets/images/tm2.jpg";
import Tm3 from "@/assets/images/tm3.jpg";
import Tm4 from "@/assets/images/tm4.jpg";
import SingleTeam from "@/assets/images/single-team.jpg";

// Animation shapes from template
import SlideSh1 from "@/assets/images/slide-sh1.png";
import AboutSh from "@/assets/images/about-sh.png";

// Animation effect types: "puzzle" (xếp hình), "side-left" / "side-right" (hai bên vào), "bottom-up" (từ dưới lên)
export type AnimType = "puzzle" | "side-left" | "side-right" | "bottom-up";

export const getAnimVariant = (seed: number, forceType?: AnimType) => {
    const cycle: AnimType[] = [
        "puzzle",
        "side-left",
        "bottom-up",
        "side-right",
        "puzzle",
        "bottom-up",
        "side-left",
        "puzzle",
        "side-right",
        "bottom-up",
    ];
    const chosen = forceType || cycle[Math.abs(seed) % cycle.length];

    if (chosen === "puzzle") {
        const rot = (seed % 2 === 0 ? 1 : -1) * (5 + (Math.abs(seed * 3) % 4));
        const xOff = (seed % 2 === 0 ? -1 : 1) * (45 + (Math.abs(seed * 7) % 35));
        const yOff = (seed % 3 === 0 ? -40 : 40);
        return {
            initial: { opacity: 0, scale: 0.82, rotate: rot, x: xOff, y: yOff },
            whileInView: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
            transition: { duration: 0.82, ease: [0.34, 1.35, 0.64, 1] as const },
        };
    }
    if (chosen === "side-left") {
        return {
            initial: { opacity: 0, x: -85, y: 0, scale: 0.95 },
            whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
            transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] as const },
        };
    }
    if (chosen === "side-right") {
        return {
            initial: { opacity: 0, x: 85, y: 0, scale: 0.95 },
            whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
            transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] as const },
        };
    }
    // bottom-up
    return {
        initial: { opacity: 0, x: 0, y: 70, scale: 0.94 },
        whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    };
};

function MotionCard({
    children,
    index = 0,
    type,
    className = "",
    delay = 0,
    style,
}: {
    children: React.ReactNode;
    index?: number;
    type?: AnimType;
    className?: string;
    delay?: number;
    style?: React.CSSProperties;
}) {
    const anim = getAnimVariant(index, type);
    return (
        <motion.div
            className={className}
            style={style}
            initial={anim.initial}
            whileInView={anim.whileInView}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                ...anim.transition,
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}

export default function LandingPageContent() {
    // State cho FAQ Accordion
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Ban lãnh đạo tập đoàn TransHub với hiệu ứng scroll ngẫu nhiên/xen kẽ tự động
    const leadershipTeam = [
        {
            name: "Trần Nam Phong (Alexander Tran)",
            role: "Chủ Tịch HĐQT & Tổng Giám Đốc (Chairman & CEO)",
            bio: "Hơn 25 năm định hình và dẫn dắt TransHub từ một đơn vị bến bãi trở thành tập đoàn logistics tích hợp đa phương thức trên 150 quốc gia. Tốt nghiệp Thạc sĩ Quản trị Chuỗi Cung Ứng MIT-CTL, nguyên Cố vấn Chiến lược Cảng biển ASEAN.",
            img: Tm1,
            experience: "25+ Năm Quản Trị",
            education: "Thạc sĩ MIT-CTL",
            pieceId: "🧩 Mảnh #01",
            animType: "puzzle" as AnimType,
        },
        {
            name: "Nguyễn Hoàng Minh (Marcus Nguyen)",
            role: "Phó TGĐ - Khối Vận Tải Hàng Hải (Chief Ocean Officer)",
            bio: "20 năm kinh nghiệm điều phối các liên minh hàng hải 2M và Ocean Alliance. Chuyên gia đàm phán hợp đồng định lượng cước container dài hạn với Maersk, MSC, CMA CGM và Hapag-Lloyd.",
            img: Tm2,
            experience: "20+ Năm Hàng Hải",
            education: "ĐH Hàng Hải Rotterdam",
            pieceId: "🧩 Mảnh #02",
            animType: "side-left" as AnimType,
        },
        {
            name: "Elena Rostova",
            role: "Giám Đốc Vận Tải Hàng Không Toàn Cầu (Global Air Cargo Director)",
            bio: "Cựu điều hành cấp cao tại Lufthansa Cargo và Singapore Airlines Cargo. Thiết lập các đường bay Charter hỏa tốc 24h và hệ sinh thái vắc-xin Cold-chain chuẩn GDP quốc tế xuyên lục địa.",
            img: Tm3,
            experience: "18+ Năm Air Cargo",
            education: "IATA Certified Director",
            pieceId: "🧩 Mảnh #03",
            animType: "bottom-up" as AnimType,
        },
        {
            name: "Đặng Khắc Toàn (David Dang)",
            role: "Giám Đốc Công Nghệ & AI (Chief Technology Officer - CTO)",
            bio: "Kiến trúc sư trưởng phát triển hệ thống AI TMS và viễn thông cảm biến vệ tinh IoT của TransHub. Tiến sĩ Khoa học Dữ liệu Đại học Stanford, từng làm việc tại Silicon Valley.",
            img: Tm4,
            experience: "15+ Năm Tech & AI",
            education: "Tiến sĩ Stanford",
            pieceId: "🧩 Mảnh #04",
            animType: "side-right" as AnimType,
        },
        {
            name: "Victoria Phạm (Victoria Pham)",
            role: "Giám Đốc Chuỗi Kho Vận Thông Minh (Chief Warehousing Officer)",
            bio: "Quản trị hệ thống 450,000 m² kho ngoại quan thông minh và trung tâm Fulfillment AGV Robot. Chuyên gia giải pháp chuỗi cung ứng cho các sàn thương mại điện tử quốc tế (Amazon, TikTok Shop).",
            img: SingleTeam,
            experience: "16+ Năm Kho Bãi",
            education: "APICS CSCP Fellow",
            pieceId: "🧩 Mảnh #05",
            animType: "puzzle" as AnimType,
        },
    ];

    // State cho Multi-Image Hero Slider
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [isHeroPaused, setIsHeroPaused] = useState(false);

    const heroSlides = [
        {
            image: AboutHero,
            tag: "Cảng Biển & Logistics Bãi Container",
            title: "Trung Tâm Trung Chuyển Hàng Hải Quốc Tế",
        },
        {
            image: SlideM1,
            tag: "Vận Tải Biển FCL & LCL Toàn Cầu",
            title: "Hạm Đội Tàu Hàng Siêu Trọng Vượt Đại Dương",
        },
        {
            image: ServAir,
            tag: "Vận Tải Hàng Không Hỏa Tốc",
            title: "Chuyên Cơ Air Cargo Bay Thẳng Quốc Tế 24h",
        },
        {
            image: SlideM2,
            tag: "Đường Bộ & Liên Vận Xuyên Biên Giới",
            title: "Đoàn Xe Container 1,200+ Chiếc Tích Hợp GPS",
        },
        {
            image: ServWarehouse,
            tag: "Kho Thông Minh WMS 4.0",
            title: "Tổ Hợp Kho Ngoại Quan Tự Động Hóa 450,000 m²",
        },
    ];

    // Tự động chuyển slide sau mỗi 4.5 giây với animation mượt mà
    React.useEffect(() => {
        if (isHeroPaused) return;
        const timer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isHeroPaused, heroSlides.length]);

    const prevHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    const nextHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="landing-wrapper position-relative overflow-hidden">
            {/* =========================================================
                TOP BRAND HEADER: Không có navbar menu, chỉ có logo & nút chi tiết
            ========================================================= */}
            <header className="landing-topbar py-3 py-md-4">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                        <Link href="/home" title="TransHub Logistics">
                            <Image src={LogoWhite} width={185} height={46} alt="TransHub Logo" priority />
                        </Link>
                        <span className="badge bg-primary text-white d-none d-md-inline-block px-3 py-2 rounded-pill small">
                            Tập Đoàn Logistics & Chuỗi Cung Ứng Toàn Cầu
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <span className="text-white-50 d-none d-lg-inline small">
                            <i className="fa-solid fa-phone text-primary me-2"></i> Hotline 24/7: <strong className="text-white">148 359 505 285</strong>
                        </span>
                        {/* NÚT CHI TIẾT TRÊN HEADER - ĐẨY VỀ TRANG HOME */}
                        <Link href="/home" className="btn btn-primary px-3 px-md-4 py-2 rounded-pill fw-bold">
                            Xem Chi Tiết <i className="fa-solid fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </div>
            </header>

            {/* =========================================================
                1. HERO SECTION: Giới thiệu tập đoàn TransHub
            ========================================================= */}
            <section className="landing-hero position-relative">
                {/* Animation shapes từ template */}
                <Image
                    src={SlideSh1}
                    className="abs-img top-0 end-0 anim-img moveYS opacity-25 d-none d-md-block"
                    width={180}
                    height={180}
                    alt="Shape"
                    style={{ pointerEvents: "none" }}
                />
                <Image
                    src={AboutSh}
                    className="abs-img bottom-0 start-0 anim-img moveY opacity-50 d-none d-md-block"
                    width={38}
                    height={97}
                    alt="Shape"
                    style={{ pointerEvents: "none" }}
                />

                <div className="container position-relative z-2">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-7">
                            <div className="landing-hero-content">
                                <div className="landing-badge">
                                    <span className="dot"></span>
                                    <span>Hệ Sinh Thái Logistics Thông Minh TransHub</span>
                                </div>

                                <h1 className="landing-hero-title">
                                    Tiên Phong Giải Pháp <br />
                                    <span className="text-highlight">Vận Tải Đa Phương Thức</span> <br />
                                    & Chuỗi Cung Ứng Số Hóa Toàn Cầu
                                </h1>

                                <p className="landing-hero-desc">
                                    TransHub tự hào là tập đoàn vận tải đa phương thức quốc tế với hơn 25 năm kiến tạo dòng chảy thương mại.
                                    Chúng tôi kết nối hơn 150 quốc gia qua mạng lưới logistics toàn diện gồm Đường Biển, Hàng Không, Đường Bộ
                                    và hệ thống Kho Bãi Thông Minh WMS thế hệ mới. Cam kết 99.8% các chuyến hàng được bàn giao chuẩn xác, an toàn tuyệt đối.
                                </p>

                                <div className="d-flex flex-wrap align-items-center gap-3">
                                    {/* NÚT CHI TIẾT NỔI BẬT NHẤT - ĐẨY VỀ TRANG HOME */}
                                    <Link href="/home" className="landing-btn-detail" title="Xem chi tiết toàn bộ nền tảng tại Trang Home">
                                        <span>Xem Chi Tiết (Về Trang Chủ)</span>
                                        <span className="btn-icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </Link>

                                    <Link href="/tracking" className="landing-btn-secondary">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <span>Tra Cứu Vận Đơn Online</span>
                                    </Link>
                                </div>

                                <div className="mt-4 pt-3 d-flex align-items-center gap-4 flex-wrap text-white-50">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-circle-check text-primary"></i>
                                        <span className="text-white small">ISO 9001:2015 & ISO 14001 Certified</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-circle-check text-primary"></i>
                                        <span className="text-white small">Thành viên FIATA, IATA & WCA</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-circle-check text-primary"></i>
                                        <span className="text-white small">Giám Sát Vệ Tinh IoT 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ô HÌNH ẢNH CHUYỂN ĐỘNG TỰ ĐỘNG VỚI NHIỀU ẢNH VÀ ANIMATION MƯỢT MÀ */}
                        <div className="col-lg-5">
                            <div
                                className="landing-hero-media"
                                onMouseEnter={() => setIsHeroPaused(true)}
                                onMouseLeave={() => setIsHeroPaused(false)}
                            >
                                <div className="landing-slider-frame">
                                    {heroSlides.map((slide, idx) => (
                                        <div
                                            key={idx}
                                            className={`landing-slide-item ${currentHeroSlide === idx ? "active" : ""}`}
                                        >
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 550px"
                                                priority={idx === 0}
                                                style={{ objectFit: "cover" }}
                                            />
                                            <div className="landing-slide-overlay"></div>
                                            <div className="landing-slide-caption">
                                                <span className="landing-slide-tag">{slide.tag}</span>
                                                <h4 className="landing-slide-title">{slide.title}</h4>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Nút lùi/tiến slide thủ công khi hover */}
                                    <button
                                        type="button"
                                        className="landing-slider-nav-btn prev"
                                        onClick={prevHeroSlide}
                                        aria-label="Ảnh trước"
                                    >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="landing-slider-nav-btn next"
                                        onClick={nextHeroSlide}
                                        aria-label="Ảnh kế tiếp"
                                    >
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </button>

                                    {/* Thanh tiến trình báo vị trí slide */}
                                    <div className="landing-slider-controls">
                                        {heroSlides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                className={`landing-slider-bar ${currentHeroSlide === idx ? "active" : ""}`}
                                                onClick={() => setCurrentHeroSlide(idx)}
                                                aria-label={`Slide ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Stat 1 - Tận dụng animation moveYS của template */}
                                <div className="landing-float-card top-right moveYS d-none d-sm-flex align-items-center gap-3">
                                    <div className="bg-primary text-white rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                                        <i className="fa-solid fa-globe fa-lg"></i>
                                    </div>
                                    <div>
                                        <div className="fw-bold fs-5 text-white">150+ Quốc Gia</div>
                                        <div className="small text-white-50">Mạng lưới vận tải toàn cầu</div>
                                    </div>
                                </div>

                                {/* Floating Stat 2 - Tận dụng animation moveYS của template */}
                                <div className="landing-float-card bottom-left moveYS d-none d-sm-flex align-items-center gap-3" style={{ animationDelay: "2s" }}>
                                    <div className="bg-primary text-white rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                                        <i className="fa-solid fa-shield-halved fa-lg"></i>
                                    </div>
                                    <div>
                                        <div className="fw-bold fs-5 text-white">99.8% Chuẩn SLA</div>
                                        <div className="small text-white-50">Bảo hiểm 100% giá trị</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick highlights strip */}
                    <div className="landing-strip mt-5">
                        <div className="row g-4">
                            <div className="col-md-3 col-sm-6">
                                <MotionCard index={0} type="side-left" className="h-100">
                                    <div className="landing-strip-item">
                                        <div className="landing-strip-icon">
                                            <i className="fa-solid fa-ship"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 text-dark fw-bold">Vận Tải Biển Quốc Tế</h6>
                                            <p className="mb-0 text-muted small">FCL, LCL, hàng lạnh chuyên dụng</p>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <MotionCard index={1} type="bottom-up" className="h-100">
                                    <div className="landing-strip-item">
                                        <div className="landing-strip-icon">
                                            <i className="fa-solid fa-plane-departure"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 text-dark fw-bold">Vận Tải Hàng Không</h6>
                                            <p className="mb-0 text-muted small">Hỏa tốc 24h & Charter trọn gói</p>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <MotionCard index={2} type="puzzle" className="h-100">
                                    <div className="landing-strip-item">
                                        <div className="landing-strip-icon">
                                            <i className="fa-solid fa-truck-fast"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 text-dark fw-bold">Vận Tải Đường Bộ</h6>
                                            <p className="mb-0 text-muted small">1,200+ Xe container & xe tải GPS</p>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <MotionCard index={3} type="side-right" className="h-100">
                                    <div className="landing-strip-item">
                                        <div className="landing-strip-icon">
                                            <i className="fa-solid fa-warehouse"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 text-dark fw-bold">Kho Thông Minh 4.0</h6>
                                            <p className="mb-0 text-muted small">WMS tự động, hoàn tất đơn 24/7</p>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                2. TỔNG QUAN TẬP ĐOÀN & TẦM NHÌN CHIẾN LƯỢC (DEEP CORPORATE PROFILE)
            ========================================================= */}
            <section className="landing-section">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <MotionCard index={4} type="side-left">
                                <div className="landing-sec-heading pe-lg-4 mb-0">
                                    <span className="landing-sec-badge">Hồ Sơ Doanh Nghiệp & Tầm Nhìn</span>
                                    <h2 className="landing-sec-title mt-2">
                                        25 Năm Vững Bước Phụng Sự Thương Mại Quốc Tế & Kết Nối Năm Châu
                                    </h2>
                                    <p className="landing-sec-desc mt-3">
                                        Khởi đầu từ năm 1999 tại một văn phòng cảng biển khiêm tốn, TransHub luôn kiên định với sứ mệnh:
                                        <em> &ldquo;Đơn giản hóa chuỗi cung ứng phức tạp và biến khoảng cách địa lý trở thành cơ hội kinh doanh vô tận cho mọi đối tác&rdquo;</em>.
                                        Trải qua hai thập kỷ rưỡi kiên trì đổi mới và ứng dụng công nghệ, TransHub đã phát triển thành một hệ sinh thái logistics tích hợp
                                        toàn diện với hơn 4,500 nhân sự trên toàn cầu, sở hữu 45 trung tâm phân phối chiến lược (Distribution Hubs) và liên kết hơn 300 cảng biển
                                        cùng 120 sân bay quốc tế.
                                    </p>
                                    <p className="landing-sec-desc">
                                        Chúng tôi hiểu rằng mỗi lô hàng không chỉ là tài sản vật chất mà còn là uy tín, là cam kết hợp đồng và là huyết mạch kinh doanh của doanh nghiệp bạn.
                                        Vì vậy, từng giải pháp tuyến đường, phương thức đóng gói đến quy trình thông quan đều được các kỹ sư logistics của TransHub đo ni đóng giày,
                                        tối ưu hóa từng dặm vận chuyển để giảm chi phí lưu kho từ 15% đến 30%.
                                    </p>

                                    <div className="row g-3 mt-3">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                                                <i className="fa-solid fa-medal text-primary fs-3"></i>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Chứng Nhận Toàn Cầu</h6>
                                                    <p className="small text-muted mb-0">Tuân thủ nghiêm ngặt chuẩn mực IATA, FIATA và WCA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                                                <i className="fa-solid fa-microchip text-primary fs-3"></i>
                                                <div>
                                                    <h6 className="fw-bold mb-1 text-dark">Nền Tảng AI & IoT</h6>
                                                    <p className="small text-muted mb-0">Tự động hóa phân tuyến thông minh và cảnh báo rủi ro sớm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        {/* NÚT CHI TIẾT ĐẨY VỀ TRANG HOME */}
                                        <Link href="/home" className="btn btn-primary">
                                            Xem Chi Tiết Tại Trang Chủ <i className="fa fa-arrow-right ms-2"></i><span></span>
                                        </Link>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <MotionCard index={5} type="puzzle" className="h-100">
                                        <div className="landing-value-card">
                                            <div className="landing-value-icon">
                                                <i className="fa-solid fa-shield-virus"></i>
                                            </div>
                                            <h5 className="fw-bold text-dark">Bảo Hiểm Toàn Diện 100%</h5>
                                            <p className="text-muted small mb-0">
                                                Đối tác chiến lược với các tập đoàn bảo hiểm hàng đầu thế giới (Allianz, AXA). Đảm bảo quyền lợi bồi thường 100% giá trị khai báo khi xảy ra bất kỳ sự cố rủi ro hàng hải, tai nạn hàng không hay thiên tai bất khả kháng.
                                            </p>
                                        </div>
                                    </MotionCard>
                                </div>

                                <div className="col-sm-6">
                                    <MotionCard index={6} type="side-right" className="h-100">
                                        <div className="landing-value-card">
                                            <div className="landing-value-icon">
                                                <i className="fa-solid fa-satellite-dish"></i>
                                            </div>
                                            <h5 className="fw-bold text-dark">Định Vị GPS & Cảm Biến IoT</h5>
                                            <p className="text-muted small mb-0">
                                                Hàng triệu gói hàng và container được gắn cảm biến viễn thông đo nhiệt độ, độ ẩm, độ rung xóc và cảnh báo mở cửa trái phép theo thời gian thực (Real-time Telemetry), truyền dữ liệu trực tiếp về cổng khách hàng.
                                            </p>
                                        </div>
                                    </MotionCard>
                                </div>

                                <div className="col-sm-6">
                                    <MotionCard index={7} type="bottom-up" className="h-100">
                                        <div className="landing-value-card">
                                            <div className="landing-value-icon">
                                                <i className="fa-solid fa-leaf"></i>
                                            </div>
                                            <h5 className="fw-bold text-dark">Logistics Xanh Bền Vững</h5>
                                            <p className="text-muted small mb-0">
                                                Cam kết Net-Zero Carbon đến năm 2040. TransHub liên tục hiện đại hóa đội xe với xe đầu kéo điện, sử dụng nhiên liệu sinh học hàng hải (Biofuel) và mái nhà kho tích hợp điện mặt trời áp mái 100% thân thiện môi trường.
                                            </p>
                                        </div>
                                    </MotionCard>
                                </div>

                                <div className="col-sm-6">
                                    <MotionCard index={8} type="puzzle" className="h-100">
                                        <div className="landing-value-card">
                                            <div className="landing-value-icon">
                                                <i className="fa-solid fa-headset"></i>
                                            </div>
                                            <h5 className="fw-bold text-dark">Chuyên Viên Trực 24/7/365</h5>
                                            <p className="text-muted small mb-0">
                                                Không có tổng đài tự động trả lời lòng vòng. Mọi yêu cầu của quý khách đều được các kỹ sư giải pháp và chuyên viên chứng từ hải quan giàu kinh nghiệm tiếp nhận, hỗ trợ xử lý khủng hoảng thông quan ngay lập tức.
                                            </p>
                                        </div>
                                    </MotionCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                3. BIÊN NIÊN SỬ 25 NĂM PHÁT TRIỂN (HISTORICAL MILESTONES)
            ========================================================= */}
            <section className="landing-section bg-light-alt border-top border-bottom">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Biên Niên Sử Phát Triển</span>
                        <h2 className="landing-sec-title mt-2">Hành Trình Kiến Tạo Đế Chế Vận Tải Toàn Cầu</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 720 }}>
                            Mỗi cột mốc là một bước tiến vượt bậc về công nghệ, mạng lưới hạ tầng và chất lượng dịch vụ khách hàng.
                        </p>
                    </div>

                    <div className="row g-4 mt-2">
                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={9} type="puzzle" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">Năm 1999 - Khởi Nghiệp</div>
                                    <h5 className="fw-bold text-dark mb-2">Thành Lập Tại Cảng Biển</h5>
                                    <p className="text-muted small">
                                        Khởi sự với 5 xe tải chở hàng rời tại cảng biển nội địa và 12 nhân sự nòng cốt. TransHub nhanh chóng chiếm trọn lòng tin của các thương nhân xuất khẩu nông sản nhờ tác phong làm việc đúng giờ và trung thực tuyệt đối.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={10} type="side-left" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">Năm 2005 - Vươn Ra Bầu Trời</div>
                                    <h5 className="fw-bold text-dark mb-2">Thành Lập Phân Hệ Air Cargo</h5>
                                    <p className="text-muted small">
                                        Ký kết thỏa thuận đại lý chỉ định với các hãng hàng không quốc tế lớn (Singapore Airlines, Lufthansa, Korean Air). Thiết lập văn phòng đại diện tại Frankfurt (Đức) và Tokyo (Nhật Bản) nhằm khép kín tuyến hàng không Âu - Á.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={11} type="bottom-up" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">Năm 2012 - Kỷ Nguyên Số Hóa</div>
                                    <h5 className="fw-bold text-dark mb-2">Triển Khai Phần Mềm WMS & GPS</h5>
                                    <p className="text-muted small">
                                        Đầu tư 15 triệu USD xây dựng hệ thống phần mềm quản lý kho tự động WMS và trang bị máy định vị vệ tinh GPS cho toàn bộ 500 phương tiện đường bộ. Đưa TransHub trở thành một trong những đơn vị tiên phong ứng dụng công nghệ giám sát số tại khu vực.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={12} type="side-right" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">Năm 2018 - Mạng Lưới 150 Quốc Gia</div>
                                    <h5 className="fw-bold text-dark mb-2">Gia Nhập Liên Minh WCA & FIATA</h5>
                                    <p className="text-muted small">
                                        Chính thức trở thành thành viên cốt cán của WCA Worldwide Alliance và Liên đoàn Quốc tế các Hiệp hội Giao nhận Hàng hóa (FIATA). Thiết lập quan hệ đối tác tin cậy với hơn 2,000 đại lý giao nhận bản địa tại 150 quốc gia và vùng lãnh thổ.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={13} type="puzzle" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">Năm 2022 - Đột Phá Trí Tuệ Nhân Tạo</div>
                                    <h5 className="fw-bold text-dark mb-2">AI Route Optimization & IoT Telemetry</h5>
                                    <p className="text-muted small">
                                        Tích hợp thuật toán trí tuệ nhân tạo để dự đoán trước 48 giờ nguy cơ ùn ứ cảng biển và thời tiết xấu, tự động đề xuất cung đường thay thế ngắn nhất. Triển khai gắn chip cảm biến IoT theo dõi nhiệt độ container lạnh chuyên chở vắc-xin và hải sản.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={14} type="bottom-up" className="h-100">
                                <div className="landing-milestone-item">
                                    <div className="landing-milestone-dot"></div>
                                    <div className="landing-milestone-year">2025 Đến Nay - Tương Lai Xanh</div>
                                    <h5 className="fw-bold text-dark mb-2">Hệ Sinh Thái Logistics Thông Minh</h5>
                                    <p className="text-muted small">
                                        Vận hành kho ngoại quan thông minh tự động hóa bằng Robot AGV tại trung tâm logistics 100,000 m². Chuyển đổi 30% đội xe sang đầu kéo điện và pin nhiên liệu hydro sạch, khẳng định vị thế dẫn đầu xu hướng logistics thế hệ mới.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                4. SERVICE ECOSYSTEM: 4 TRỤ CỘT DỊCH VỤ CHI TIẾT
            ========================================================= */}
            <section className="landing-section">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Hệ Sinh Thái Dịch Vụ Cốt Lõi</span>
                        <h2 className="landing-sec-title mt-2">Năng Lực Vận Tải Toàn Diện & Giải Pháp Chuyên Biệt</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 760 }}>
                            Từ hàng siêu trường siêu trọng nghìn tấn vượt đại dương đến kiện hàng linh kiện vi mạch hỏa tốc 24h trên bầu trời, TransHub sở hữu hạ tầng phương tiện chuyên dụng đáp ứng trọn vẹn mọi yêu cầu khắt khe nhất.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Service 1: Đường biển */}
                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={15} type="puzzle" className="h-100">
                                <div className="landing-service-card">
                                    <div className="landing-service-thumb">
                                        <Image src={ServOcean} alt="Ocean Freight" width={400} height={250} />
                                        <span className="landing-service-tag">Vận Tải Biển FCL & LCL</span>
                                    </div>
                                    <div className="landing-service-body">
                                        <h4 className="landing-service-title">Vận Tải Đường Biển Quốc Tế</h4>
                                        <p className="small text-muted mb-2">
                                            Kết nối thẳng tới hơn 300 cảng biển lớn trên toàn cầu. Hợp đồng khối lượng cước cố định dài hạn với các hãng tàu hàng đầu (Maersk, MSC, COSCO, CMA CGM, ONE).
                                        </p>
                                        <ul className="landing-service-features">
                                            <li><i className="fa-solid fa-check"></i> Hàng nguyên container FCL 20ft, 40ft, 45ft HC</li>
                                            <li><i className="fa-solid fa-check"></i> Hàng lẻ LCL đóng ghép hàng tuần ổn định</li>
                                            <li><i className="fa-solid fa-check"></i> Container lạnh Reefer điều khiển vi khí hậu</li>
                                            <li><i className="fa-solid fa-check"></i> Hàng rời Bulk Cargo & Hàng dự án siêu trường</li>
                                            <li><i className="fa-solid fa-check"></i> Khai báo chứng từ điện tử Bill of Lading e-BL</li>
                                        </ul>
                                        <Link href="/home" className="btn btn-outline-primary btn-sm mt-auto">
                                            Chi Tiết Dịch Vụ <i className="fa fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>

                        {/* Service 2: Hàng không */}
                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={16} type="side-left" className="h-100">
                                <div className="landing-service-card">
                                    <div className="landing-service-thumb">
                                        <Image src={ServAir} alt="Air Freight" width={400} height={250} />
                                        <span className="landing-service-tag">Hàng Không Hỏa Tốc</span>
                                    </div>
                                    <div className="landing-service-body">
                                        <h4 className="landing-service-title">Vận Tải Hàng Không Quốc Tế</h4>
                                        <p className="small text-muted mb-2">
                                            Giải pháp vận chuyển siêu tốc từ 24h đến 48h dành cho hàng hóa giá trị cao, linh kiện điện tử, mẫu thử nghiệm và dược phẩm khẩn cấp qua các phi trường quốc tế.
                                        </p>
                                        <ul className="landing-service-features">
                                            <li><i className="fa-solid fa-check"></i> Bay hỏa tốc Priority Next Flight Out (NFO)</li>
                                            <li><i className="fa-solid fa-check"></i> Thuê nguyên chuyến máy bay Charter tải trọng lớn</li>
                                            <li><i className="fa-solid fa-check"></i> Hàng nguy hiểm DG tuân thủ chứng chỉ ICAO</li>
                                            <li><i className="fa-solid fa-check"></i> Đóng gói đá khô & thùng giữ nhiệt y tế GSP</li>
                                            <li><i className="fa-solid fa-check"></i> Thông quan ưu tiên tại nhà ga hàng hóa sân bay</li>
                                        </ul>
                                        <Link href="/home" className="btn btn-outline-primary btn-sm mt-auto">
                                            Chi Tiết Dịch Vụ <i className="fa fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>

                        {/* Service 3: Đường bộ */}
                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={17} type="bottom-up" className="h-100">
                                <div className="landing-service-card">
                                    <div className="landing-service-thumb">
                                        <Image src={ServRoad} alt="Road Freight" width={400} height={250} />
                                        <span className="landing-service-tag">Đường Bộ & Liên Vận</span>
                                    </div>
                                    <div className="landing-service-body">
                                        <h4 className="landing-service-title">Vận Tải Đường Bộ & Liên Vận</h4>
                                        <p className="small text-muted mb-2">
                                            Đội xe hùng hậu hơn 1,200 đầu kéo container và xe tải chuyên dụng, kết nối mạng lưới giao hàng nội địa và các hành lang kinh tế liên vận xuyên biên giới Á - Âu.
                                        </p>
                                        <ul className="landing-service-features">
                                            <li><i className="fa-solid fa-check"></i> 1,200+ Xe đời mới trang bị camera giám sát cabin</li>
                                            <li><i className="fa-solid fa-check"></i> Vận tải xuyên biên giới GMS (Lào, Campuchia, Trung Quốc, Thái Lan)</li>
                                            <li><i className="fa-solid fa-check"></i> Rơ-moóc sàn thấp kéo thiết bị quá khổ quá tải</li>
                                            <li><i className="fa-solid fa-check"></i> Giao nhận tận nơi Door-to-Door linh hoạt 24/7</li>
                                            <li><i className="fa-solid fa-check"></i> Ký nhận biên bản giao hàng số hóa điện tử e-POD</li>
                                        </ul>
                                        <Link href="/home" className="btn btn-outline-primary btn-sm mt-auto">
                                            Chi Tiết Dịch Vụ <i className="fa fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>

                        {/* Service 4: Kho bãi */}
                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={18} type="side-right" className="h-100">
                                <div className="landing-service-card">
                                    <div className="landing-service-thumb">
                                        <Image src={ServWarehouse} alt="Warehousing" width={400} height={250} />
                                        <span className="landing-service-tag">Kho Thông Minh 4.0</span>
                                    </div>
                                    <div className="landing-service-body">
                                        <h4 className="landing-service-title">Kho Bãi & Hoàn Tất Đơn Hàng</h4>
                                        <p className="small text-muted mb-2">
                                            Mạng lưới 450,000 m² kho ngoại quan (Bonded Warehouse), kho CFS và kho tổng phân phối đạt chuẩn quốc tế, quản lý chính xác từng SKU bằng mã vạch và RFID.
                                        </p>
                                        <ul className="landing-service-features">
                                            <li><i className="fa-solid fa-check"></i> Hệ thống WMS kết nối API thời gian thực với ERP/Shopify</li>
                                            <li><i className="fa-solid fa-check"></i> Dán tem nhãn phụ, đóng gói co màng, đóng pallet ISPM 15</li>
                                            <li><i className="fa-solid fa-check"></i> Dịch vụ Fulfillment cho sàn TMĐT (Shopee, Lazada, Amazon)</li>
                                            <li><i className="fa-solid fa-check"></i> Phòng lạnh lưu kho nhiệt độ âm sâu (-25°C đến 15°C)</li>
                                            <li><i className="fa-solid fa-check"></i> Hệ thống PCCC tự động Sprinter và bảo vệ 3 lớp 24/24</li>
                                        </ul>
                                        <Link href="/home" className="btn btn-outline-primary btn-sm mt-auto">
                                            Chi Tiết Dịch Vụ <i className="fa fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                5. STATS SECTION: QUY MÔ & THÀNH TỰU BẰNG SỐ LIỆU
            ========================================================= */}
            <section className="landing-stats-section">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-3 col-6">
                            <MotionCard index={19} type="bottom-up">
                                <div className="landing-stat-box">
                                    <div className="landing-stat-number">
                                        <CounterUp ending={25} />+
                                    </div>
                                    <div className="landing-stat-label">Năm Uy Tín Quốc Tế (Từ 1999)</div>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-6">
                            <MotionCard index={20} type="puzzle">
                                <div className="landing-stat-box">
                                    <div className="landing-stat-number">
                                        <CounterUp ending={150} />+
                                    </div>
                                    <div className="landing-stat-label">Quốc Gia & Vùng Lãnh Thổ Kết Nối</div>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-6">
                            <MotionCard index={21} type="side-left">
                                <div className="landing-stat-box">
                                    <div className="landing-stat-number">
                                        <CounterUp ending={5} />M+
                                    </div>
                                    <div className="landing-stat-label">Chuyến Hàng Giao Nhận An Toàn</div>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-6">
                            <MotionCard index={22} type="side-right">
                                <div className="landing-stat-box">
                                    <div className="landing-stat-number">
                                        <CounterUp ending={99.8} decimals={1} />%
                                    </div>
                                    <div className="landing-stat-label">Độ Đúng Hạn Theo Cam Kết SLA</div>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                6. GIẢI PHÁP CHUYÊN NGÀNH ĐẶC THÙ (INDUSTRY-SPECIFIC SOLUTIONS)
            ========================================================= */}
            <section className="landing-section bg-light-alt">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Chuyên Môn Hóa Ngành Hàng</span>
                        <h2 className="landing-sec-title mt-2">Giải Pháp Chuỗi Cung Ứng May Đo Cho Từng Ngành Nghề</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 760 }}>
                            Mỗi nhóm ngành sản phẩm đòi hỏi tiêu chuẩn bảo quản, tốc độ và pháp lý hải quan khác nhau. TransHub tự hào có các đội ngũ chuyên gia am hiểu sâu sắc từng lĩnh vực kinh tế trọng điểm.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={23} type="side-left" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-microchip"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Linh Kiện Điện Tử & Bán Dẫn (High-Tech)</h5>
                                    <p className="text-muted small mb-3">
                                        Bảo vệ các bo mạch chủ, wafer bán dẫn và thiết bị điện tử siêu nhạy cảm. Phương tiện giảm chấn khí nén (Air-ride Suspension), kiểm soát độ ẩm phòng sạch và đóng gói màng chống tĩnh điện ESD đạt chuẩn quốc tế.
                                    </p>
                                    <span className="badge bg-light text-dark border">Chống sốc tuyệt đối</span>
                                    <span className="badge bg-light text-dark border ms-2">Bảo mật cao</span>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={24} type="puzzle" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-shirt"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Dệt May, Giày Da & Thời Trang (Fashion Retail)</h5>
                                    <p className="text-muted small mb-3">
                                        Giải pháp xe thùng và container treo chuyên dụng (Garments on Hanger - GOH) giữ nguyên dáng âu phục cao cấp. Dịch vụ phân loại theo size, đóng gói lẻ và dán barcode trực tiếp phân phối tới các chuỗi cửa hàng bán lẻ toàn cầu.
                                    </p>
                                    <span className="badge bg-light text-dark border">Container GOH</span>
                                    <span className="badge bg-light text-dark border ms-2">Phân phối Fast-Fashion</span>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={25} type="bottom-up" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-apple-whole"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Nông Thủy Sản & Thực Phẩm (Cold Chain)</h5>
                                    <p className="text-muted small mb-3">
                                        Hệ sinh thái kho lạnh và chuỗi container vi khí hậu từ -25°C đến 4°C. Đảm bảo bảo tồn độ tươi ngon và dinh dưỡng cho trái cây tươi, thanh long, tôm cá xuất khẩu sang thị trường khó tính như Mỹ, EU, Nhật Bản và Hàn Quốc.
                                    </p>
                                    <span className="badge bg-light text-dark border">Kiểm soát khí CA</span>
                                    <span className="badge bg-light text-dark border ms-2">Chứng chỉ HACCP</span>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={26} type="side-right" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-pills"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Dược Phẩm & Thiết Bị Y Tế (Pharma & Healthcare)</h5>
                                    <p className="text-muted small mb-3">
                                        Tuân thủ nghiêm ngặt tiêu chuẩn Thực hành tốt bảo quản thuốc GSP và GDP. Hệ thống giám sát nhiệt độ tự động truyền tín hiệu cảnh báo nếu nhiệt độ chênh lệch quá 0.5°C, bảo vệ vắc-xin, huyết thanh và hóa chất xét nghiệm.
                                    </p>
                                    <span className="badge bg-light text-dark border">Chuẩn GDP/GSP</span>
                                    <span className="badge bg-light text-dark border ms-2">Nhiệt độ âm sâu</span>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={27} type="puzzle" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-car-side"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Công Nghiệp Ô Tô & Phụ Tùng (Automotive JIT)</h5>
                                    <p className="text-muted small mb-3">
                                        Giao hàng đúng giờ chuẩn xác đến từng phút theo mô hình Just-in-Time (JIT) và Just-in-Sequence (JIS). Cung ứng linh kiện đồng bộ trực tiếp lên dây chuyền lắp ráp xe hơi mà không cần lưu kho đệm tại nhà máy.
                                    </p>
                                    <span className="badge bg-light text-dark border">Just-in-Time (JIT)</span>
                                    <span className="badge bg-light text-dark border ms-2">Zero Downtime</span>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <MotionCard index={28} type="bottom-up" className="h-100">
                                <div className="landing-industry-card">
                                    <div className="landing-industry-icon">
                                        <i className="fa-solid fa-flask"></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">Hóa Chất & Hàng Nguy Hiểm (Dangerous Goods - DG)</h5>
                                    <p className="text-muted small mb-3">
                                        Đội ngũ tài xế và nhân viên chứng từ sở hữu chứng chỉ quốc tế IMDG & IATA DGR. Phương tiện chuyên dụng chống rò rỉ, chống cháy nổ cho các loại hóa chất công nghiệp, pin Lithium-ion, khí nén và sơn phủ đặc biệt.
                                    </p>
                                    <span className="badge bg-light text-dark border">Chứng chỉ IATA DGR</span>
                                    <span className="badge bg-light text-dark border ms-2">An toàn cháy nổ</span>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                7. CÔNG NGHỆ ĐỘT PHÁ TẠI TRANSHUB (TECH STACK & DIGITAL PORTAL)
            ========================================================= */}
            <section className="landing-section">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <MotionCard index={29} type="side-left">
                                <span className="landing-sec-badge">Nền Tảng Công Nghệ Số Hóa</span>
                                <h2 className="landing-sec-title mt-2">
                                    Nền Tảng AI TMS & Cổng Thông Tin Vận Tải Trực Tuyến
                                </h2>
                                <p className="landing-sec-desc mt-3">
                                    Tại TransHub, chúng tôi không chỉ vận chuyển hàng hóa hữu hình mà còn số hóa toàn bộ dòng thông tin dữ liệu. Mọi khách hàng doanh nghiệp đều được cấp tài khoản truy cập Cổng Khách Hàng (Customer Portal) chuyên nghiệp với những tính năng vượt bậc:
                                </p>

                                <div className="d-flex flex-column gap-3 mt-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="bg-primary text-white rounded-circle p-2 mt-1 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                                            <i className="fa-solid fa-check small"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold text-dark mb-1">Theo Dõi Vận Đơn Vệ Tinh (Satellite Live Map)</h6>
                                            <p className="text-muted small mb-0">Hiển thị tọa độ chính xác của tàu biển, chuyến bay và xe tải trên bản đồ tương tác với dự báo thời gian đến cảng đích (ETA) chính xác đến 99%.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="bg-primary text-white rounded-circle p-2 mt-1 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                                            <i className="fa-solid fa-check small"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold text-dark mb-1">Quản Lý Chứng Từ Điện Tử (Cloud Document Vault)</h6>
                                            <p className="text-muted small mb-0">Tải về tức thì vận đơn đường biển e-BL, hóa đơn thương mại, packing list, chứng chỉ xuất xứ C/O và tờ khai hải quan có chữ ký số điện tử hợp pháp.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="bg-primary text-white rounded-circle p-2 mt-1 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                                            <i className="fa-solid fa-check small"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold text-dark mb-1">Tích Hợp API Trực Tiếp Với ERP Doanh Nghiệp</h6>
                                            <p className="text-muted small mb-0">Kết nối hai chiều mượt mà với SAP, Oracle, Microsoft Dynamics 365 hoặc các hệ thống OMS của doanh nghiệp, tự động đồng bộ trạng thái đơn hàng không cần nhập liệu thủ công.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    {/* NÚT CHI TIẾT ĐẨY VỀ TRANG HOME */}
                                    <Link href="/home" className="btn btn-primary">
                                        Khám Phá Chi Tiết Tại Trang Chủ <i className="fa fa-arrow-right ms-2"></i><span></span>
                                    </Link>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-6">
                            <MotionCard index={30} type="puzzle">
                                <div className="p-4 bg-dark text-white rounded-4 shadow-lg border border-secondary position-relative">
                                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="badge bg-danger rounded-circle p-1"></span>
                                            <span className="badge bg-warning rounded-circle p-1"></span>
                                            <span className="badge bg-success rounded-circle p-1"></span>
                                            <span className="text-white-50 small ms-2 font-monospace">TransHub AI Telemetry Dashboard v4.2</span>
                                        </div>
                                        <span className="badge bg-success text-white small">Live Connected</span>
                                    </div>

                                    <div className="p-3 bg-secondary bg-opacity-25 rounded-3 mb-3 font-monospace small">
                                        <div className="text-warning mb-1">// Container ID: THUB-892410-REEFER</div>
                                        <div className="text-white">Route: Cảng Cát Lái (VN) ➔ Cảng Long Beach, CA (USA)</div>
                                        <div className="text-info">Speed: 19.4 knots | Temp: -20.2°C (Target: -20.0°C)</div>
                                        <div className="text-success">Status: Optimal Navigation - ETA on Schedule (+0 min)</div>
                                    </div>

                                    <div className="row g-2 text-center small">
                                        <div className="col-4">
                                            <div className="p-2 bg-secondary bg-opacity-10 rounded border border-secondary">
                                                <div className="text-white-50">Vận Tốc Trung Bình</div>
                                                <div className="fw-bold fs-6 text-primary">19.4 Kts</div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="p-2 bg-secondary bg-opacity-10 rounded border border-secondary">
                                                <div className="text-white-50">Nhiệt Độ Lạnh</div>
                                                <div className="fw-bold fs-6 text-success">-20.2°C</div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="p-2 bg-secondary bg-opacity-10 rounded border border-secondary">
                                                <div className="text-white-50">Mức Xăng/CO2</div>
                                                <div className="fw-bold fs-6 text-info">-14.8% CO2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BAN LÃNH ĐẠO CÔNG TY & HIỆU ỨNG LƯỚT XẾP HÌNH (EXECUTIVE LEADERSHIP)
            ========================================================= */}
            <section className="landing-section bg-white position-relative overflow-hidden">
                <div className="container">
                    <div className="text-center landing-sec-heading mb-4">
                        <span className="landing-sec-badge">Đội Ngũ Lãnh Đạo Cấp Cao</span>
                        <h2 className="landing-sec-title mt-2">Ban Điều Hành Dẫn Dắt Đế Chế TransHub</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 740 }}>
                            Đội ngũ các nhà chiến lược, chuyên gia vận tải quốc tế và kỹ sư công nghệ hàng đầu với tầm nhìn phụng sự chuỗi cung ứng toàn cầu.
                        </p>

                    </div>
                    <div className="row g-4 justify-content-center mt-2">
                        {leadershipTeam.map((leader, idx) => (
                            <div key={leader.name} className="col-lg-4 col-md-6">
                                <MotionCard
                                    index={27 + idx}
                                    type={leader.animType}
                                    delay={idx * 0.12}
                                    className="h-100"
                                >
                                    <div className="landing-leader-card">
                                        <div className="landing-leader-thumb">
                                            <Image
                                                src={leader.img}
                                                alt={leader.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 380px"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <div className="landing-leader-overlay"></div>
                                            <span className="landing-leader-badge">{leader.experience}</span>
                                            <div className="landing-leader-puzzle-tag" title="Mảnh ghép lãnh đạo">
                                                <i className="fa-solid fa-puzzle-piece"></i>
                                            </div>
                                        </div>

                                        <div className="landing-leader-body">
                                            <h4 className="landing-leader-name">{leader.name}</h4>
                                            <div className="landing-leader-role">{leader.role}</div>
                                            <p className="landing-leader-bio">{leader.bio}</p>
                                            <div className="landing-leader-meta">
                                                <span><i className="fa-solid fa-graduation-cap text-primary me-1"></i> {leader.education}</span>
                                                <Link href="/home" className="text-primary fw-bold text-decoration-none small">
                                                    Xem Chi Tiết <i className="fa-solid fa-arrow-right ms-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                8. QUY TRÌNH 7 BƯỚC VẬN HÀNH KHÉP KÍN (7-STEP WORKFLOW)
            ========================================================= */}
            <section className="landing-section bg-light-alt border-top border-bottom">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Quy Chuẩn Vận Hành</span>
                        <h2 className="landing-sec-title mt-2">7 Bước Quản Trị Chuỗi Vận Chuyển Khép Kín</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 720 }}>
                            Mọi đơn hàng từ vài kilogram đến hàng trăm nghìn tấn đều được thực hiện theo quy trình kiểm định chất lượng 7 giai đoạn minh bạch và chặt chẽ.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={31} type="side-left" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">01</span>
                                    <h5 className="fw-bold text-dark">Tiếp Nhận & Khảo Sát</h5>
                                    <p className="text-muted small mb-0">
                                        Tiếp nhận thông tin danh mục hàng hóa, khối lượng, quy cách đóng gói và địa điểm giao nhận. Kỹ sư phân tích tuyến đường tối ưu chi phí và gửi báo giá minh bạch trong 30 phút.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={32} type="puzzle" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">02</span>
                                    <h5 className="fw-bold text-dark">Thiết Kế Lộ Trình</h5>
                                    <p className="text-muted small mb-0">
                                        Lựa chọn phương thức vận tải đơn nhất hay đa phương thức (biển kết hợp hàng không hoặc xe lửa). Đặt chỗ trước (Booking) với hãng tàu hoặc hãng bay để đảm bảo không bị rớt hàng trong mùa cao điểm.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={33} type="bottom-up" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">03</span>
                                    <h5 className="fw-bold text-dark">Đóng Gói & Dán Nhãn</h5>
                                    <p className="text-muted small mb-0">
                                        Đóng thùng gỗ khử trùng chuẩn ISPM 15, màng co chống thấm nước, gắn seal an ninh và mã vạch RFID. Kiểm tra ngoại quan chống biến dạng trước khi xếp vào container.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={34} type="side-right" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">04</span>
                                    <h5 className="fw-bold text-dark">Thông Quan Đầu Xuất</h5>
                                    <p className="text-muted small mb-0">
                                        Đội ngũ hải quan nộp tờ khai điện tử qua hệ thống VNACCS/VCIS, thực hiện kiểm hóa nếu có luồng đỏ/vàng, xin giấy chứng nhận xuất xứ (C/O), kiểm dịch thực vật và giấy phép chuyên ngành.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={35} type="side-left" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">05</span>
                                    <h5 className="fw-bold text-dark">Vận Tải Chặng Chính</h5>
                                    <p className="text-muted small mb-0">
                                        Hàng hóa được bốc xếp lên tàu container hoặc khoang máy bay. Kích hoạt thiết bị giám sát hành trình và truyền tín hiệu vị trí liên tục về Customer Portal của khách hàng.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <MotionCard index={36} type="puzzle" className="h-100">
                                <div className="landing-step-card">
                                    <span className="landing-step-badge">06</span>
                                    <h5 className="fw-bold text-dark">Thông Quan & Giao Cuối</h5>
                                    <p className="text-muted small mb-0">
                                        Hoàn thành thủ tục nhập khẩu tại cảng đích, nộp thuế và lệ phí. Đội xe tải nội địa bốc dỡ hàng và giao nhận tận kho người nhận (Door-to-Door) theo đúng khung giờ đã hẹn trước.
                                    </p>
                                </div>
                            </MotionCard>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <MotionCard index={37} type="bottom-up" className="h-100">
                                <div className="landing-step-card bg-primary text-white border-0">
                                    <span className="landing-step-badge bg-white text-primary">07</span>
                                    <h5 className="fw-bold text-white">Nghiệm Thu Điện Tử & Hậu Mãi Toàn Diện</h5>
                                    <p className="text-white-50 small mb-2">
                                        Ký biên bản giao nhận điện tử e-POD có chữ ký và hình ảnh chụp thực tế tại điểm giao. Đối soát hóa đơn minh bạch không phụ phí ẩn, bảo lưu hồ sơ hải quan 5 năm và giải quyết bồi thường trong vòng 48 giờ nếu có tổn thất phát sinh.
                                    </p>
                                    <Link href="/home" className="btn btn-dark btn-sm text-white px-3 py-2 rounded-pill mt-2">
                                        Xem Chi Tiết Quy Trình Tại Trang Chủ <i className="fa-solid fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                9. BẢNG SO SÁNH NĂNG LỰC TRANSHUB VS ĐỐI THỦ
            ========================================================= */}
            <section className="landing-section">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Lợi Thế Cạnh Tranh</span>
                        <h2 className="landing-sec-title mt-2">Vì Sao Hàng Nghìn Doanh Nghiệp Chọn TransHub?</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 720 }}>
                            So sánh minh bạch các tiêu chí vận hành giữa giải pháp của TransHub và các đơn vị giao nhận trung gian truyền thống.
                        </p>
                    </div>

                    <MotionCard index={38} type="bottom-up">
                        <div className="table-responsive bg-white rounded-4 shadow-sm border p-3">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="py-3" style={{ width: "30%" }}>Tiêu Chí So Sánh</th>
                                        <th scope="col" className="py-3 text-primary fw-bold" style={{ width: "35%" }}>
                                            <i className="fa-solid fa-circle-check text-primary me-2"></i> TransHub Logistics Group
                                        </th>
                                        <th scope="col" className="py-3 text-muted" style={{ width: "35%" }}>
                                            Đơn Vị Giao Nhận Truyền Thống
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Cơ Sở Hạ Tầng & Phương Tiện</td>
                                        <td className="text-dark">Sở hữu 1,200+ xe tải/container, 45 Hub kho bãi riêng rộng 450,000 m²</td>
                                        <td className="text-muted">Chủ yếu thuê ngoài (Outsource) trung gian, bị động về phương tiện</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Giám Sát Vận Đơn</td>
                                        <td className="text-dark">Theo dõi GPS & cảm biến IoT nhiệt độ thời gian thực 24/7 trên ứng dụng</td>
                                        <td className="text-muted">Phải gọi điện thoại hoặc gửi email hỏi nhân viên chăm sóc khách hàng</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Tỷ Lệ Đúng Hạn (SLA)</td>
                                        <td className="text-primary fw-bold">99.8% cam kết trong hợp đồng kinh tế có điều khoản phạt chậm</td>
                                        <td className="text-muted">Dao động 80% - 88%, thường xuyên phát sinh trễ chuyến không bồi thường</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Bảo Hiểm & Giải Quyết Khiếu Nại</td>
                                        <td className="text-dark">Bảo hiểm 100% giá trị, bồi thường nhanh chóng trong vòng 48 giờ làm việc</td>
                                        <td className="text-muted">Thủ tục phức tạp kéo dài nhiều tháng, chỉ bồi thường theo cân nặng giới hạn</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Hệ Thống Công Nghệ API</td>
                                        <td className="text-dark">Hỗ trợ API kết nối trực tiếp vào phần mềm ERP SAP, Oracle của khách hàng</td>
                                        <td className="text-muted">Nhập liệu thủ công bằng file Excel rời rạc, dễ sai sót dữ liệu</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Minh Bạch Cước Phí</td>
                                        <td className="text-dark">Báo giá trọn gói All-in, cam kết tuyệt đối không phát sinh phụ phí ẩn</td>
                                        <td className="text-muted">Dễ phát sinh các khoản phí cược container, lưu bãi DEM/DET bất ngờ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </MotionCard>
                </div>
            </section>

            {/* =========================================================
                10. HỆ THỐNG FAQ MỞ RỘNG (CÂU HỎI THƯỜNG GẶP CHI TIẾT)
            ========================================================= */}
            <section className="landing-section bg-light-alt border-top border-bottom">
                <div className="container">
                    <div className="text-center landing-sec-heading">
                        <span className="landing-sec-badge">Giải Đáp Thắc Mắc</span>
                        <h2 className="landing-sec-title mt-2">Câu Hỏi Thường Gặp Của Khách Hàng</h2>
                        <p className="landing-sec-desc mx-auto" style={{ maxWidth: 700 }}>
                            Những câu trả lời cặn kẽ về thủ tục, chi phí, bảo hiểm và thời gian vận chuyển tại TransHub.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* FAQ 1 */}
                            <MotionCard index={39} type="side-left" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(0)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 0 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>1. Thời gian vận chuyển đường biển và đường hàng không mất bao lâu?</span>
                                    </div>
                                    {openFaq === 0 && (
                                        <p className="landing-faq-a">
                                            Thời gian phụ thuộc vào tuyến vận chuyển cụ thể:
                                            <br />• <strong>Đường hàng không hỏa tốc:</strong> Chỉ từ 24h - 48h đối với các tuyến châu Á (Nhật Bản, Hàn Quốc, Singapore) và 48h - 72h đối với tuyến Âu - Mỹ.
                                            <br />• <strong>Đường biển:</strong> Tuyến Nội Á mất từ 3 - 7 ngày; tuyến đi Bờ Tây nước Mỹ (Los Angeles/Long Beach) mất khoảng 14 - 18 ngày; tuyến đi châu Âu (Rotterdam/Hamburg) mất từ 26 - 32 ngày tùy theo hãng tàu và thời tiết hải hành.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>

                            {/* FAQ 2 */}
                            <MotionCard index={40} type="side-right" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(1)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 1 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>2. Hàng hóa của tôi có được bảo hiểm toàn bộ giá trị không?</span>
                                    </div>
                                    {openFaq === 1 && (
                                        <p className="landing-faq-a">
                                            Có. Mọi chuyến hàng vận chuyển qua hệ thống TransHub đều được bảo hiểm trách nhiệm pháp lý theo chuẩn quốc tế. Ngoài ra, chúng tôi liên kết với các công ty bảo hiểm uy tín hàng đầu như Allianz và AXA để cung cấp gói bảo hiểm hàng hải toàn diện 100% giá trị hóa đơn (Institute Cargo Clauses A), bồi thường đầy đủ cả trong trường hợp tổn thất toàn bộ do chìm tàu, cháy nổ hoặc rơi rớt.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>

                            {/* FAQ 3 */}
                            <MotionCard index={41} type="puzzle" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(2)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 2 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>3. Cước phí vận tải được tính dựa trên thể tích (CBM) hay khối lượng (Gross Weight)?</span>
                                    </div>
                                    {openFaq === 2 && (
                                        <p className="landing-faq-a">
                                            Theo quy chuẩn vận tải quốc tế:
                                            <br />• <strong>Đường hàng không:</strong> Trọng lượng tính cước (Chargeable Weight) là số lớn hơn giữa cân nặng thực tế (Gross Weight - kg) và trọng lượng quy đổi thể tích: <code>Thể tích (cm³) / 6000</code>.
                                            <br />• <strong>Đường biển LCL:</strong> Cước tính theo RT (Revenue Ton), là giá trị lớn hơn giữa số mét khối (CBM) và số tấn (Ton). Tỷ lệ quy chuẩn thông thường là 1 CBM = 1,000 kg. Chuyên viên TransHub luôn tính toán phương án có lợi nhất cho khách hàng.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>

                            {/* FAQ 4 */}
                            <MotionCard index={42} type="bottom-up" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(3)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 3 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>4. Dịch vụ hải quan trọn gói của TransHub gồm những hạng mục gì?</span>
                                    </div>
                                    {openFaq === 3 && (
                                        <p className="landing-faq-a">
                                            TransHub cung cấp đại lý khai thuê hải quan chính thức gồm: Lên tờ khai điện tử VNACCS, kiểm tra mã HS code tối ưu thuế, hỗ trợ làm hồ sơ kiểm dịch thực vật / động vật, đăng ký kiểm tra chất lượng nhà nước, xin chứng nhận xuất xứ hàng hóa C/O (Form A, B, D, E, EUR.1, VK, CPTPP, RCEP) và xử lý kiểm hóa trực tiếp tại cảng.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>

                            {/* FAQ 5 */}
                            <MotionCard index={43} type="side-left" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(4)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 4 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>5. TransHub hỗ trợ những loại container đường biển nào?</span>
                                    </div>
                                    {openFaq === 4 && (
                                        <p className="landing-faq-a">
                                            Chúng tôi đáp ứng đầy đủ tất cả các chủng loại container trên thị trường:
                                            <br />• Container bách hóa tổng hợp (Dry Container): 20GP, 40GP, 40HC, 45HC.
                                            <br />• Container lạnh (Reefer): 20RF, 40HR với dải nhiệt từ -25°C đến +25°C.
                                            <br />• Container mở nóc (Open Top) và Container mặt phẳng (Flat Rack) cho hàng cồng kềnh quá khổ.
                                            <br />• Container bồn (ISO Tank) chuyên chở hóa chất lỏng và dầu ăn thực phẩm an toàn.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>

                            {/* FAQ 6 */}
                            <MotionCard index={44} type="side-right" className="mb-3">
                                <div className="landing-faq-card" onClick={() => toggleFaq(5)} style={{ cursor: "pointer" }}>
                                    <div className="landing-faq-q">
                                        <i className={`fa-solid ${openFaq === 5 ? "fa-circle-minus text-primary" : "fa-circle-plus text-muted"}`}></i>
                                        <span>6. Làm thế nào để kết nối API hệ thống kho WMS của TransHub với website bán hàng của tôi?</span>
                                    </div>
                                    {openFaq === 5 && (
                                        <p className="landing-faq-a">
                                            Đội ngũ IT chuyên trách của TransHub cung cấp hệ thống tài liệu RESTful API hoàn chỉnh. Quý khách có thể kết nối trực tiếp phần mềm quản lý đơn hàng (OMS), sàn thương mại điện tử (Shopify, WooCommerce, TikTok Shop, Shopee) hoặc ERP nội bộ. Mọi đơn hàng mới sẽ tự động bắn lệnh đóng gói (Pick & Pack) tại kho của TransHub ngay lập tức mà không cần can thiệp thủ công.
                                        </p>
                                    )}
                                </div>
                            </MotionCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                11. ĐỐI TÁC CHIẾN LƯỢC TỪ TRANG HOME (BRANDSEC)
            ========================================================= */}
            <BrandsSec />

            {/* =========================================================
                12. MEGA BOTTOM CTA BANNER: Nút Chi Tiết nổi bật đẩy về Trang Home
            ========================================================= */}
            <section className="landing-section">
                <div className="container">
                    <MotionCard index={45} type="puzzle">
                        <div className="landing-cta-banner text-center">
                            <div className="position-relative z-2">
                                <span className="landing-badge">
                                    <span className="dot"></span>
                                    <span>Khám Phá Toàn Diện Hệ Thống TransHub</span>
                                </span>

                                <h2 className="landing-cta-title">
                                    Sẵn Sàng Tối Ưu Hóa Chuỗi Cung Ứng Toàn Cầu Cùng TransHub?
                                </h2>

                                <p className="landing-cta-desc">
                                    Truy cập ngay Trang Chủ để xem chi tiết đầy đủ danh mục dịch vụ, các dự án tiêu biểu,
                                    công cụ tính toán cước phí tự động, danh sách mạng lưới đại lý và biểu giá cước quốc tế mới nhất.
                                </p>

                                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                                    {/* NÚT CHI TIẾT NỔI BẬT NHẤT ĐẨY VỀ TRANG HOME */}
                                    <Link href="/home" className="landing-cta-pulse-btn" title="Chuyển đến Trang Chủ">
                                        <span>Xem Chi Tiết (Về Trang Chủ)</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>

                                    <Link href="/quote" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">
                                        Yêu Cầu Báo Giá Nhanh
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </MotionCard>
                </div>
            </section>

            {/* =========================================================
                13. MEGA FOOTER: GIỚI THIỆU RẤT NHIỀU VÍ DỤ, CHI NHÁNH, TUYẾN VẬN TẢI, DỰ ÁN
            ========================================================= */}
            <footer className="landing-mega-footer">
                <div className="container">
                    <div className="row g-4 pb-5">
                        {/* Cột 1: Thông tin tập đoàn & Trụ sở quốc tế */}
                        <div className="col-lg-3 col-md-6">
                            <Image src={LogoWhite} width={180} height={45} alt="TransHub Logo" className="mb-3" />
                            <p className="small text-white-50 mb-3">
                                Tập đoàn logistics hàng đầu thế giới với hệ sinh thái vận tải biển, hàng không, đường bộ và kho vận thông minh thế hệ mới.
                            </p>
                            <div className="small text-white-50 mb-2">
                                <i className="fa-solid fa-location-dot text-primary me-2"></i>
                                <strong>Trụ sở chính:</strong> 88 Đại Lộ Cảng Biển, Khu Công Nghệ Cao, TP. Hồ Chí Minh
                            </div>
                            <div className="small text-white-50 mb-2">
                                <i className="fa-solid fa-phone text-primary me-2"></i>
                                <strong>Hotline:</strong> 148 359 505 285
                            </div>
                            <div className="small text-white-50 mb-3">
                                <i className="fa-solid fa-envelope text-primary me-2"></i>
                                <strong>Email:</strong> support@transhub-logistics.com
                            </div>
                            <div className="d-flex gap-2">
                                <span className="landing-example-tag">Văn phòng Singapore</span>
                                <span className="landing-example-tag">Rotterdam Hub</span>
                                <span className="landing-example-tag">Los Angeles Branch</span>
                            </div>
                        </div>

                        {/* Cột 2: Ví dụ các tuyến vận tải quốc tế mẫu */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="landing-footer-title">Tuyến Vận Tải Quốc Tế Mẫu</h5>
                            <ul className="landing-footer-list">
                                <li>
                                    <strong className="text-white">Tuyến Biển Sài Gòn ➔ Los Angeles:</strong>
                                    <div className="small text-white-50">Thời gian 14 - 16 ngày | Tần suất: 3 chuyến/tuần</div>
                                </li>
                                <li>
                                    <strong className="text-white">Tuyến Biển Hải Phòng ➔ Hamburg (EU):</strong>
                                    <div className="small text-white-50">Thời gian 26 - 28 ngày | Tần suất: 2 chuyến/tuần</div>
                                </li>
                                <li>
                                    <strong className="text-white">Tuyến Bay Hỏa Tốc Hà Nội ➔ Frankfurt:</strong>
                                    <div className="small text-white-50">Thời gian 24 - 36h | Khởi hành hàng ngày</div>
                                </li>
                                <li>
                                    <strong className="text-white">Tuyến Bay Hỏa Tốc TP.HCM ➔ Incheon:</strong>
                                    <div className="small text-white-50">Thời gian 12 - 18h | Bay thẳng hàng ngày</div>
                                </li>
                                <li>
                                    <strong className="text-white">Tuyến Xe Tải Liên Vận Hà Nội ➔ Bangkok:</strong>
                                    <div className="small text-white-50">Thời gian 48h | Qua cửa khẩu Cầu Treo & Savannakhet</div>
                                </li>
                            </ul>
                        </div>

                        {/* Cột 3: Ví dụ các dự án tiêu biểu đã hoàn thành */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="landing-footer-title">Dự Án Tiêu Biểu Đã Thực Hiện</h5>
                            <ul className="landing-footer-list">
                                <li>
                                    <strong className="text-white">Dự Án Di Dời Nhà Máy Vi Mạch Bán Dẫn:</strong>
                                    <div className="small text-white-50">Vận chuyển an toàn 380 container thiết bị phòng sạch từ Đài Loan về Khu Công Nghệ Cao.</div>
                                </li>
                                <li>
                                    <strong className="text-white">Dự Án Xuất Khẩu 150,000 Tấn Nông Sản Lạnh:</strong>
                                    <div className="small text-white-50">Duy trì liên tục chuỗi nhiệt độ lạnh -18°C suốt 30 ngày sang thị trường châu Âu.</div>
                                </li>
                                <li>
                                    <strong className="text-white">Dự Án Bay Charter 8 Chuyến Thiết Bị Ô Tô:</strong>
                                    <div className="small text-white-50">Giải cứu nguy cơ gián đoạn dây chuyền sản xuất xe hơi chỉ trong vòng 36 giờ.</div>
                                </li>
                                <li>
                                    <strong className="text-white">Dự Án Vận Tải Tua-bin Gió Khổng Lồ:</strong>
                                    <div className="small text-white-50">Xe kéo rơ-moóc chuyên dụng 96 bánh chở cánh quạt dài 78m đến trang trại điện gió.</div>
                                </li>
                            </ul>
                        </div>

                        {/* Cột 4: Ví dụ các giải pháp & Loại container chuyên dụng */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="landing-footer-title">Quy Chuẩn Container & Tiện Ích</h5>
                            <p className="small text-white-50 mb-3">
                                Cung cấp đầy đủ các chuẩn loại bao bì và phương thức đóng gói tiêu chuẩn hải quan quốc tế:
                            </p>
                            <div className="mb-3">
                                <span className="landing-example-tag">Container Khô 20ft (33 CBM)</span>
                                <span className="landing-example-tag">Container Khô 40ft HC (76 CBM)</span>
                                <span className="landing-example-tag">Reefer Container Lạnh (-25°C)</span>
                                <span className="landing-example-tag">Flat Rack Siêu Trọng</span>
                                <span className="landing-example-tag">Pallet Gỗ Hun Trùng ISPM 15</span>
                                <span className="landing-example-tag">Air Cargo LD3 / ULD Contour</span>
                                <span className="landing-example-tag">Màng Bọc Co Chống Ẩm</span>
                                <span className="landing-example-tag">Khóa Cáp Vệ Tinh GPS Seal</span>
                            </div>
                            <div className="mt-3 pt-2">
                                <Link href="/home" className="btn btn-outline-light btn-sm rounded-pill w-100">
                                    Truy Cập Trang Chủ Khám Phá Chi Tiết <i className="fa-solid fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Dòng bản quyền và liên kết chân trang */}
                    <div className="landing-footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-3">
                        <div className="small text-white-50">
                            © {new Date().getFullYear()} <strong>TransHub Logistics Global Group</strong>. Toàn quyền bảo lưu thương hiệu và bản quyền công nghệ.
                        </div>
                        <div className="d-flex flex-wrap gap-3 small text-white-50">
                            <Link href="/home" className="text-white-50 text-decoration-none">Trang Chủ (Chi Tiết)</Link>
                            <span>•</span>
                            <Link href="/services" className="text-white-50 text-decoration-none">Dịch Vụ Vận Tải</Link>
                            <span>•</span>
                            <Link href="/tracking" className="text-white-50 text-decoration-none">Tra Cứu Vận Đơn</Link>
                            <span>•</span>
                            <Link href="/quote" className="text-white-50 text-decoration-none">Báo Giá Nhanh</Link>
                            <span>•</span>
                            <Link href="/contact" className="text-white-50 text-decoration-none">Liên Hệ</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
