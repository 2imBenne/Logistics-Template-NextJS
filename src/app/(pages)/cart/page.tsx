import PageHeader from '@/components/headers/PageHeader';
import CartSection from '@/features/cart/CartSection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Cart | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Cart" subtitle="Cart" />
            <CartSection />
        </>
    );
};

export default page;