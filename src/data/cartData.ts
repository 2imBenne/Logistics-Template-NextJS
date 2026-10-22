import ShS1 from "@/assets/images/sh-s1.jpg";
import ShS2 from "@/assets/images/sh-s2.jpg";
import ShS3 from "@/assets/images/sh-s3.jpg";
import { StaticImageData } from "next/image";

export interface CartItem {
    id: number;
    img: string | StaticImageData;
    title: string;
    price: number;
    quantity: number;
    link: string;
}

export const cartData: CartItem[] = [
    {
        id: 1,
        img: ShS1,
        title: "Golf Ball Srixon SF Tour Special",
        price: 45.00,
        quantity: 1,
        link: "/single-product",
    },
    {
        id: 2,
        img: ShS2,
        title: "Golf Gloves Footjoy GTxtreme",
        price: 90.00,
        quantity: 1,
        link: "/single-product",
    },
    {
        id: 3,
        img: ShS3,
        title: "Golf Footjoy GTxtreme",
        price: 56.00,
        quantity: 1,
        link: "/single-product",
    },
];
