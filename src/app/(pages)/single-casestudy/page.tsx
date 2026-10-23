import PageHeader from '@/components/headers/PageHeader';
import CaseDetailsPage from '@/features/single-casestudy/CaseDetailsPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dự Án Vận Chuyển 500 Tấn Thiết Bị Đi Phú Quốc | Con Rùa Biển Logistics",
    description: "Nghiên cứu trường hợp (Case Study): Con Rùa Biển tối ưu giải pháp vận tải đa phương thức chuyển 500 tấn thiết bị công trình đi đảo Phú Quốc an toàn 100%, tiết kiệm 23.5% chi phí, đúng hẹn 99.6%.",
    keywords: [
        "vận chuyển hàng đi phú quốc",
        "chành xe phú quốc",
        "vận tải con rùa biển",
        "vận chuyển hàng siêu trường siêu trọng",
        "vận tải đa phương thức biển đảo",
        "case study logistics con rùa biển"
    ],
    openGraph: {
        title: "Dự Án Vận Chuyển 500 Tấn Thiết Bị Đi Phú Quốc | Con Rùa Biển Logistics",
        description: "Giải pháp vận tải đa phương thức tối ưu thời gian 38 giờ, tiết kiệm 23.5% chi phí cho dự án công trình đảo Phú Quốc.",
        type: "article",
        locale: "vi_VN",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://conruabien.vn/single-casestudy/#article",
            "headline": "Giải pháp vận tải đa phương thức chuyển 500 tấn thiết bị công trình ra đảo Phú Quốc an toàn 100%",
            "description": "Nghiên cứu trường hợp thực tế Con Rùa Biển tối ưu hóa vận chuyển hàng siêu trường siêu trọng đi Phú Quốc với tỷ lệ an toàn 100% và tiết kiệm 23.5% chi phí.",
            "inLanguage": "vi-VN",
            "author": {
                "@type": "Organization",
                "name": "Công ty TNHH Vận tải Con Rùa Biển",
                "url": "https://conruabien.vn"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Con Rùa Biển - Chuyên chở chuyên nghiệp",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://conruabien.vn/assets/images/logo.png"
                }
            },
            "datePublished": "2024-08-28",
            "dateModified": "2026-10-23"
        },
        {
            "@type": "FAQPage",
            "@id": "https://conruabien.vn/single-casestudy/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Thời gian vận chuyển hàng hóa từ TP.HCM đi Phú Quốc mất bao lâu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Thời gian vận chuyển hàng lẻ, hàng ghép qua chành xe Con Rùa Biển mất từ 24 đến 36 giờ. Đối với hàng nguyên chuyến hoặc hàng dự án siêu trường siêu trọng đi bằng xà lan chuyên dụng, tổng thời gian giao nhận tận chân công trình dao động từ 36 đến 48 giờ."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Con Rùa Biển có chính sách đền bù và bảo hiểm hàng hóa như thế nào?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Con Rùa Biển áp dụng chính sách bảo hiểm trách nhiệm hàng hải toàn phần cho 100% giá trị lô hàng. Mọi trường hợp hư hỏng hoặc mất mát phát sinh trong quá trình chuyên chở được giám định độc lập và bồi thường 100% giá trị hợp đồng trong vòng 5 ngày làm việc."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hàng hóa quá khổ, quá tải có vận chuyển ra đảo Phú Quốc được không?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Con Rùa Biển có đầy đủ năng lực vận chuyển hàng quá khổ quá tải ra đảo Phú Quốc nhờ sở hữu đội rơ-moóc lùn nhiều trục, xe sàn chuyên dụng và xà lan biển 1.000 tấn, có khả năng tiếp nhận các kiện hàng máy móc đơn lẻ nặng đến 80 tấn và dài trên 25 mét hợp pháp."
                    }
                }
            ]
        }
    ]
};

const page: React.FC = () => {
    return (
        <>
            {/* JSON-LD Structured Data for AI & Search Engine Optimization (GEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHeader
                title="Nghiên Cứu Dự Án Thực Tế"
                subtitle="Case Study: Vận Chuyển Thiết Bị Đi Phú Quốc - Con Rùa Biển"
            />
            <CaseDetailsPage />
        </>
    );
};

export default page;