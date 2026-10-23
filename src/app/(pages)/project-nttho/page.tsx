import PageHeader from "@/components/headers/PageHeader";
import ProjectNtthoSec from "@/features/project-nttho/ProjectNtthoSec";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Dự Án Logistics & Vận Tải Biển Tiêu Biểu | Con Rùa Biển (NTTHO)",
    description: "Tổng hợp các dự án vận chuyển hàng hóa tiêu biểu của Con Rùa Biển: vận tải biển, chành xe Sài Gòn - Phú Quốc, hàng siêu trường siêu trọng và logistics toàn diện.",
    keywords: [
        "dự án logistics con rùa biển",
        "vận chuyển hàng phú quốc",
        "vận tải biển nội địa",
        "vận chuyển siêu trường siêu trọng",
        "chành xe sài gòn phú quốc",
        "dự án vận tải nttho",
    ],
    alternates: {
        canonical: "https://conruabien.com/project-nttho",
    },
    openGraph: {
        title: "Dự Án Vận Tải Tiêu Biểu - Con Rùa Biển Logistics (NTTHO)",
        description: "Hồ sơ năng lực vận chuyển hàng hóa đường biển, đường bộ và chành xe đảo Phú Quốc của Con Rùa Biển.",
        url: "https://conruabien.com/project-nttho",
        siteName: "Con Rùa Biển Logistics",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dự Án Vận Tải Biển & Logistics Tiêu Biểu | Con Rùa Biển",
        description: "Giải pháp logistics vượt trội với hơn 15 năm kinh nghiệm phục vụ doanh nghiệp.",
    },
};

export default function ProjectNtthoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LogisticsService",
        "name": "Dự Án Logistics Tiêu Biểu Con Rùa Biển (NTTHO)",
        "description": "Năng lực thực thi các dự án vận tải đường biển, chành xe đi đảo Phú Quốc và hàng siêu trọng.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Công Ty Vận Tải Con Rùa Biển",
            "telephone": "+84 945 000 006",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bãi xe Con Rùa Biển, Bình Tân",
                "addressLocality": "TP. Hồ Chí Minh",
                "addressCountry": "VN"
            }
        },
        "areaServed": ["TP. Hồ Chí Minh", "Phú Quốc", "Nha Trang", "Hải Phòng", "Hà Nội"]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageHeader
                title="Dự Án Logistics - NTTHO"
                subtitle="Dự Án NTTHO"
            />
            <ProjectNtthoSec />
        </>
    );
}
