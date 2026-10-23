import { StaticImageData } from "next/image"; 
import Banner1 from "@/assets/images/banner-pha-bien.avif";
import Banner2 from "@/assets/images/banner-dau-keo.avif";
import Banner3 from "@/assets/images/banner-xe-tai.avif";
import Banner4 from "@/assets/images/banner-xa-lan.avif";
import Banner5 from "@/assets/images/banner-hang-khong.avif";
import  blog1 from "@/assets/images/blog1.jpg"
import  blog2 from "@/assets/images/blog2.jpg"
import  blog3 from "@/assets/images/blog3.jpg"
import  blogN1 from "@/assets/images/blog-n1.jpg"
import  blogN2 from "@/assets/images/blog-n2.jpg"
import  blogN3 from "@/assets/images/blog-n3.jpg"
import  blog4 from "@/assets/images/blog4.jpg"
import  blog5 from "@/assets/images/blog5.jpg"
import  blog6 from "@/assets/images/blog6.jpg"
import  blLg1 from "@/assets/images/bl-lg1.jpg"
import  blLg2 from "@/assets/images/bl-lg2.jpg"
import  blLg3 from "@/assets/images/bl-lg3.jpg"
import  ls1 from "@/assets/images/ls1.png"
import  ls2 from "@/assets/images/ls2.png"
import  ls3 from "@/assets/images/ls3.png"

// Blog data types
export interface BlogEntry {
    id: number;
    image: string | StaticImageData;
    author: string;
    date: string;
    title: string;
    excerpt?: string;
    category?: string;
}

// Blog entries for grid layout (Document 1)
export const blogGridData: BlogEntry[] = [
    {
        id: 1,
        image: blog1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 2,
        image: blog2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 3,
        image: blog3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 4,
        image: blogN1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 5,
        image: blogN2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 6,
        image: blogN3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 7,
        image: blog1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 8,
        image: blog2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 9,
        image: blog3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 10,
        image: blogN2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
];

// Blog entries for card layout (Document 2)
export const blogCardData: BlogEntry[] = [
    {
        id: 1,
        image: Banner1,
        author: "Mười Tuyền",
        date: "20 Th10, 2026",
        title: "Kinh nghiệm vận chuyển hàng hóa ra đảo Phú Quốc an toàn và tiết kiệm",
    },
    {
        id: 2,
        image: Banner2,
        author: "Mười Tuyền",
        date: "18 Th10, 2026",
        title: "Dịch vụ vận chuyển container và xe đầu kéo chuyên dụng đi Phú Quốc",
    },
    {
        id: 3,
        image: Banner3,
        author: "Mười Tuyền",
        date: "15 Th10, 2026",
        title: "Quy trình nhận ghép hàng lẻ và giao nhận tận nơi TP.HCM - Phú Quốc",
    },
    {
        id: 4,
        image: Banner4,
        author: "Mười Tuyền",
        date: "12 Th10, 2026",
        title: "Vận tải đường thủy bằng xà lan chuyên dụng cho hàng công trình Phú Quốc",
    },
    {
        id: 5,
        image: Banner5,
        author: "Mười Tuyền",
        date: "10 Th10, 2026",
        title: "Dịch vụ chuyển phát nhanh hỏa tốc hàng không kết nối Phú Quốc",
    },
    {
        id: 6,
        image: Banner1,
        author: "Mười Tuyền",
        date: "08 Th10, 2026",
        title: "Những lưu ý quan trọng khi gửi hàng hóa qua chành xe đi Phú Quốc",
    },
    {
        id: 7,
        image: Banner2,
        author: "Mười Tuyền",
        date: "05 Th10, 2026",
        title: "Lịch trình xe tải và phà biển vận chuyển hàng hóa Con Rùa Biển",
    },
    {
        id: 8,
        image: Banner3,
        author: "Mười Tuyền",
        date: "02 Th10, 2026",
        title: "Cam kết bồi thường 100% giá trị hàng hóa khi xảy ra sự cố vận chuyển",
    },
];

// Blog entries for standard layout (Document 3)
export const blogStandardData: BlogEntry[] = [
    {
        id: 1,
        image: blLg1,
        author: "admin",
        date: "08 October, 2025",
        title: "Focus logistics secure new landmark Contracts",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 2,
        image: blLg2,
        author: "admin",
        date: "08 October, 2025",
        title: "Green Logistics Solutions for a Greener Future",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 3,
        image: blLg3,
        author: "admin",
        date: "08 October, 2025",
        title: "The Future of Logistics Emb racing Technology",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 4,
        image: blLg1,
        author: "admin",
        date: "08 October, 2025",
        title: "Focus logistics secure new landmark Contracts",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 5,
        image: blLg2,
        author: "admin",
        date: "08 October, 2025",
        title: "Green Logistics Solutions for a Greener Future",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
];

// Latest blog entries for sidebar
export const latestBlogData: BlogEntry[] = [
    {
        id: 1,
        image: ls1,
        date: "22 Oct, 2025",
        title: "TranHub Embraces AI for Optimized Route",
        author: "",
    },
    {
        id: 2,
        image: ls2,
        date: "22 Oct, 2025",
        title: "How is Adapting to Meet Growing Demand",
        author: "",
    },
    {
        id: 3,
        image: ls3,
        date: "22 Oct, 2025",
        title: "TransHub Commitment to Eco-Friendly",
        author: "",
    },
];

// Categories data
export const blogCategories = [
    { name: "Air Freight", count: 18 },
    { name: "Road Transport", count: 2 },
    { name: "Rail Transport", count: 12 },
    { name: "Cargo Services", count: 14 },
    { name: "Warehouse", count: 19 },
    { name: "Ocean Freight", count: 18 },
];

// Tags/Keywords data
export const blogTags = [
    "Logistics Services",
    "Warehouse",
    "air fright",
    "Ocean Freight",
    "Global",
    "community",
];