// Import all necessary images
import Modal from '@/assets/images/modal.svg';
import Logistic from '@/assets/images/logistic.svg';
import ServS2 from '@/assets/images/serv-s2.png';
import ServS3 from '@/assets/images/serv-s3.png';
import ServS4 from '@/assets/images/serv-s4.png';
import ServS5 from '@/assets/images/serv-s5.png';
import ServS6 from '@/assets/images/serv-s6.png';
import BusGear from '@/assets/images/icons/bus-gear.png';
import PlaneLg from '@/assets/images/icons/plane-lg.png';
import Road from '@/assets/images/icons/road.png';
import Serv1 from '@/assets/images/icons/serv1.png';
import Serv12 from '@/assets/images/serv1.png';
import Serv2 from '@/assets/images/icons/serv2.png';
import Serv22 from '@/assets/images/serv2.png';
import Serv3 from '@/assets/images/icons/serv3.png';
import Serv32 from '@/assets/images/serv3.png';
import Serv4 from '@/assets/images/icons/serv4.png';
import Serv42 from '@/assets/images/serv4.png';
import { StaticImageData } from 'next/image';

// Type definitions
export interface ServiceCardType1 {
    id: number;
    title: string;
    description: string;
    backgroundImage: string | StaticImageData;
    icon: string;
    link: string;
    delay: string;
}

export interface ServiceCardType2 {
    id: number;
    title: string;
    description: string;
    thumbnailImage: string | StaticImageData;
    icon: string | StaticImageData;
    link: string;
}

// Data for Services component (service-card2)
export const servicesData: ServiceCardType1[] = [
    {
        id: 1,
        title: 'Vận tải đường bộ',
        description: 'Vận tải hàng hóa nội địa nhanh chóng, an toàn và tiết kiệm, đáp ứng mọi nhu cầu vận chuyển đa dạng của doanh nghiệp',
        backgroundImage: ServS2,
        icon: BusGear,
        link: '/single-service',
        delay: '.4'
    },
    {
        id: 2,
        title: 'Chuyển phát nhanh hàng không',
        description: 'Vận chuyển hỏa tốc, an toàn, đảm bảo thời gian, phù hợp cho các tài liệu và hàng hóa quan trọng',
        backgroundImage: ServS3,
        icon: PlaneLg,
        link: '/single-service',
        delay: '.6'
    },
    {
        id: 3,
        title: 'Vận tải đường biển',
        description: 'Vận tải hàng hóa đường biển nhanh chóng, an toàn và tiết kiệm, đáp ứng mọi nhu cầu vận chuyển đa dạng của doanh nghiệp',
        backgroundImage: ServS4,
        icon: Road,
        link: '/single-service',
        delay: '.2'
    },
    {
        id: 4,
        title: 'Vận tải đa phương thức',
        description: 'Kết hợp đường bộ, đường biển và đường hàng không tối ưu chi phí, thời gian và an toàn hàng hóa',
        backgroundImage: ServS5,
        icon: Modal,
        link: '/single-service',
        delay: '.4'
    },
    {
        id: 5,
        title: 'Kho bãi và phân phối',
        description: 'Giải pháp lưu trữ và phân phối hàng hóa tối ưu, đảm bảo an toàn và tiết kiệm chi phí cho doanh nghiệp',
        backgroundImage: ServS6,
        icon: Logistic,
        link: '/single-service',
        delay: '.6'
    },
    {
        id: 6,
        title: 'Vận tải đường sắt',
        description: 'Vận tải hàng hóa đường sắt nhanh chóng, an toàn và tiết kiệm, đáp ứng mọi nhu cầu vận chuyển đa dạng của doanh nghiệp',
        backgroundImage: ServS6,
        icon: Logistic,
        link: '/single-service',
        delay: '.8'
    }
];

// Data for Services2 component (service-card)
export const services2Data: ServiceCardType2[] = [
    {
        id: 1,
        title: 'Multimodal Transport',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv12,
        icon: Serv1,
        link: '/single-service'
    },
    {
        id: 2,
        title: 'E-commerce Logistics',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv22,
        icon: Serv2,
        link: '/single-service'
    },
    {
        id: 3,
        title: 'Warehousing',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv32,
        icon: Serv3,
        link: '/single-service'
    },
    {
        id: 4,
        title: 'Courier Services',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv42,
        icon: Serv4,
        link: '/single-service'
    },
    {
        id: 5,
        title: 'E-commerce Logistics',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv12,
        icon: Serv1,
        link: '/single-service'
    },
    {
        id: 6,
        title: 'E-commerce Logistics',
        description: 'For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering',
        thumbnailImage: Serv22,
        icon: Serv2,
        link: '/single-service'
    }
];