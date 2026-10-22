import PageHeader from '@/components/headers/PageHeader';
import FaqSec from '@/features/faq/FaqSec';
import WhyUs3 from '@/features/home-three/WhyUs3';
import ServicesInner from '@/features/services/ServicesInner';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Service | TransHub - Transport & Logistics",
    description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Services 2" subtitle="Services 2" />
            <ServicesInner />
            <WhyUs3 />
            <FaqSec />
        </>
    );
};

export default page;