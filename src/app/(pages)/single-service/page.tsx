import PageHeader from '@/components/headers/PageHeader';
import FaqSec from '@/features/faq/FaqSec';
import BrandsSec from '@/features/home-one/BrandsSec';
import BrandsSecMain from '@/features/single-service/BrandsSecMain';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Single Service" subtitle="Single Service" />
            <BrandsSecMain />
            <BrandsSec />
            <FaqSec />
        </>
    );
};

export default page;