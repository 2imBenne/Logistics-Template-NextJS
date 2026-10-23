import PageHeader from "@/components/headers/PageHeader";
import ProjectStarSec from "@/features/project-star/ProjectStarSec";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dự Án Vận Tải Tiêu Biểu | Con Rùa Biển Logistics",
    description: "Hồ sơ năng lực vận chuyển hàng hóa đường biển, đường bộ và chành xe đảo Phú Quốc của Con Rùa Biển. Vận chuyển hàng công trình, máy móc, nội thất chuyên nghiệp.",
    keywords: [
        "dự án vận chuyển phú quốc",
        "dự án logistics con rùa biển",
        "vận chuyển nội thất phú quốc",
        "vận chuyển máy móc đảo phú quốc",
        "dự án vận tải tiêu biểu",
    ],
    alternates: {
        canonical: "https://conruabien.com/project-star",
    },
    openGraph: {
        title: "Dự Án Vận Tải Tiêu Biểu - Con Rùa Biển Logistics",
        description: "Tổng hợp các dự án vận tải vượt biển tiêu biểu đi Kiên Giang, Phú Quốc và tuyến đảo Tây Nam từ Con Rùa Biển.",
        url: "https://conruabien.com/project-star",
        siteName: "Con Rùa Biển Logistics",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dự Án Vận Tải Tiêu Biểu | Con Rùa Biển Logistics",
        description: "Hồ sơ năng lực vận chuyển hàng hóa đường biển, đường bộ đi Phú Quốc của Con Rùa Biển.",
    },
};

export default function ProjectStarPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Dự Án Logistics Tiêu Biểu Con Rùa Biển",
        "description": "Danh sách các dự án vận chuyển hàng hóa tiêu biểu từ Sài Gòn đi đảo Phú Quốc và các tuyến liên tỉnh của Công ty Con Rùa Biển.",
        "url": "https://conruabien.com/project-star",
        "provider": {
            "@type": "LogisticsService",
            "name": "Công ty TNHH Vận Tải Con Rùa Biển",
            "telephone": "0945 000 006",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bình Tân",
                "addressLocality": "Hồ Chí Minh",
                "addressCountry": "VN",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageHeader
                title="Dự Án Logistics Tiêu Biểu"
                subtitle="Dự Án Star"
            />
            <ProjectStarSec />
        </>
    );
}
