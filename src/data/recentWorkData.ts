import Pt1 from "@/assets/images/pt1.jpg";
import Pt2 from "@/assets/images/pt2.jpg";
import Pt3 from "@/assets/images/pt3.jpg";
import Pt4 from "@/assets/images/pt4.jpg";
import Pt5 from "@/assets/images/pt5.jpg";
import { StaticImageData } from "next/image";

// Type definition
export interface RecentWorkType {
    id: number;
    title: string;
    category: string;
    categoryLink: string;
    image: string | StaticImageData;
    link: string;
}

// Recent work/portfolio items data
export const recentWorkData: RecentWorkType[] = [
    {
        id: 1,
        title: "Electric Bus Fleet Implementation",
        category: "Transport",
        categoryLink: "#",
        image: Pt1,
        link: "/single-casestudy"
    },
    {
        id: 2,
        title: "AI-Based Predictive Maintenance",
        category: "Transport",
        categoryLink: "#",
        image: Pt2,
        link: "/single-casestudy"
    },
    {
        id: 3,
        title: "Security For Cargo Delivery Services",
        category: "Transport",
        categoryLink: "#",
        image: Pt3,
        link: "/single-casestudy"
    },
    {
        id: 4,
        title: "Sustainable Logistics and Last-Mile Delivery",
        category: "Transport",
        categoryLink: "#",
        image: Pt4,
        link: "/single-casestudy"
    },
    {
        id: 5,
        title: "Real-Time Ride-Sharing and Route Optimization",
        category: "Transport",
        categoryLink: "#",
        image: Pt5,
        link: "/single-casestudy"
    },
    {
        id: 6,
        title: "Smart Traffic Management System for Smart Cities",
        category: "Transport",
        categoryLink: "#",
        image: Pt1,
        link: "/single-casestudy"
    }
];