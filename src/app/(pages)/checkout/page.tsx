import PageHeader from '@/components/headers/PageHeader';
import CheckoutSection from '@/features/checkout/CheckoutSection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Checkout | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Checkout" subtitle="Checkout" />
            <CheckoutSection />
        </>
    );
};

export default page;