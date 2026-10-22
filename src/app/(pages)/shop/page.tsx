import PageHeader from '@/components/headers/PageHeader';
import ShopSection from '@/features/shop/ShopSection';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Shop" subtitle="Shop" />
            <ShopSection />
        </>
    );
};

export default page;