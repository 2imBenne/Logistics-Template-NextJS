import Tm1 from "@/assets/images/tm1.jpg";
import Tm2 from "@/assets/images/tm2.jpg";
import Tm3 from "@/assets/images/tm3.jpg";
import Tm4 from "@/assets/images/tm4.jpg";
import NguyenThanhTuyen from "@/assets/images/nguyen-thanh-tuyen.png";
import { StaticImageData } from "next/image";

// Type definitions
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface TeamMemberType {
    id: number;
    name: string;
    position: string;
    image: string | StaticImageData;
    link: string;
    socialLinks: SocialLink[];
}

// Default social links (can be customized per team member if needed)
const defaultSocialLinks: SocialLink[] = [
    {
        platform: "facebook",
        url: "#",
        icon: "fab fa-facebook-f"
    },
    {
        platform: "twitter",
        url: "#",
        icon: "fab fa-x-twitter"
    },
    {
        platform: "instagram",
        url: "#",
        icon: "fab fa-instagram"
    },
    {
        platform: "linkedin",
        url: "#",
        icon: "fab fa-linkedin-in"
    }
];

// Team members data
export const teamData: TeamMemberType[] = [
    {
        id: 1,
        name: "Nguyễn Thanh Tuyền",
        position: "Tổng Giám đốc",
        image: NguyenThanhTuyen,
        link: "/single-team",
        socialLinks: [
            {
                platform: "facebook",
                url: "https://www.facebook.com/ChanhxePhuQuoc/",
                icon: "fab fa-facebook-f"
            },
            {
                platform: "youtube",
                url: "https://www.youtube.com/@muoituyenvlog334",
                icon: "fab fa-youtube"
            },
            {
                platform: "linkedin",
                url: "#",
                icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        id: 2,
        name: "Jenny Mache",
        position: "Head of operations",
        image: Tm2,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 3,
        name: "Sofia Melisa",
        position: "Project Manager",
        image: Tm3,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 4,
        name: "Shane Darren",
        position: "Head of operations",
        image: Tm4,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 5,
        name: "Jenny Noah",
        position: "Head of operations",
        image: Tm4,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 6,
        name: "Jenny Mache",
        position: "Head of operations",
        image: Tm3,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 7,
        name: "Sofia Melisa",
        position: "Project Manager",
        image: Tm2,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 8,
        name: "Shane Darren",
        position: "Head of operations",
        image: Tm1,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    }
];