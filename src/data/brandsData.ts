// Import brand images
import Br1 from "@/assets/images/br1.png";
import Br2 from "@/assets/images/br2.png";
import Br3 from "@/assets/images/br3.png";
import Br4 from "@/assets/images/br4.png";
import Br5 from "@/assets/images/br5.png";
import Br6 from "@/assets/images/br6.png";
import { StaticImageData } from "next/image";

// Type definition
export interface Brand {
    id: number;
    image: string | StaticImageData;
    alt: string;
    link: string;
}

// Brands data
export const brandsData: Brand[] = [
    {
        id: 1,
        image: Br1,
        alt: "Brand 1",
        link: "#"
    },
    {
        id: 2,
        image: Br2,
        alt: "Brand 2",
        link: "#"
    },
    {
        id: 3,
        image: Br3,
        alt: "Brand 3",
        link: "#"
    },
    {
        id: 4,
        image: Br4,
        alt: "Brand 4",
        link: "#"
    },
    {
        id: 5,
        image: Br5,
        alt: "Brand 5",
        link: "#"
    },
    {
        id: 6,
        image: Br6,
        alt: "Brand 6",
        link: "#"
    },
    {
        id: 7,
        image: Br1,
        alt: "Brand 1 Duplicate",
        link: "#"
    }
];